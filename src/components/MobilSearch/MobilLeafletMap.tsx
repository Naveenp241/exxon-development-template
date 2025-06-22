import { useEffect, useState, useRef } from "react";
import StationSearchBar from "./StationSearchBar";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  useSearchActions,
  useSearchState,
  Matcher,
} from "@yext/search-headless-react";

// Create numbered custom marker icon
function createNumberedIcon(number: number, isSelected: boolean) {
  return L.divIcon({
    html: `
      <div style="position: relative; width: 36px; height: 54px;">
        <svg width="36" height="54" viewBox="0 0 36 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 0C8.05888 0 0 8.05888 0 18C0 28.2843 18 54 18 54C18 54 36 28.2843 36 18C36 8.05888 27.9411 0 18 0Z" fill="${isSelected ? "#1D4ED8" : "#DC2626"}"/>
        </svg>
        <div style="
          position: absolute;
          top: 8px;
          left: 0;
          width: 100%;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          color: white;
        ">
          ${number}
        </div>
      </div>
    `,
    className: "",
    iconSize: [36, 54],
    iconAnchor: [18, 54],
    popupAnchor: [0, -54],
  });
}


// ✅ New: Component to zoom to first result
const ZoomToFirst = ({ position }: { position: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    if (position[0] && position[1]) {
      map.flyTo(position, 15, { duration: 1.2 });
    }
  }, [position]);

  return null;
};

const MobilLeafletMap = () => {
  const searchActions = useSearchActions();
  const results = useSearchState((state) => state.vertical.results);
  const [center, setCenter] = useState<[number, number]>([37.7749, -122.4194]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  // Perform initial query with static filter + geo
  useEffect(() => {
    searchActions.setStaticFilters([
      {
        filter: {
          fieldId: "name",
          matcher: Matcher.Equals,
          value: "Mobil",
          kind: "fieldValue",
        },
        selected: true,
      },
    ]);

    // Set static geo location (hardcoded)
    searchActions.setUserLocation({
      latitude: 44.81380920000001,
      longitude: -68.8045398,
    });

    searchActions.setQuery(""); // optional
    searchActions.executeVerticalQuery();
  }, []);

  // Update center on first result load
  useEffect(() => {
    if (results?.length) {
      const first = results[0]?.rawData?.yextDisplayCoordinate;
      if (first?.latitude && first?.longitude) {
        setCenter([first.latitude, first.longitude]);
      }
    }
  }, [results]);

  useEffect(() => {
  if (selectedIndex !== null && results?.[selectedIndex]) {
    const coord = results[selectedIndex]?.rawData?.yextDisplayCoordinate;
    if (coord && mapRef.current) {
      mapRef.current.setView([coord.latitude, coord.longitude], 15);
    }
  }
}, [selectedIndex, results]);


  return (
    <div className="relative h-screen w-full">
      {/* Map Full Background */}
      <MapContainer
        center={center}
        zoom={10}
        whenCreated={(mapInstance) => { mapRef.current = mapInstance }}
        className="absolute top-0 left-0 h-full w-full z-0"
      >
        <ZoomToFirst position={center} />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {results?.map((r, i) => {
          const coord = r.rawData.yextDisplayCoordinate;
          if (!coord) return null;

          return (
            <Marker
              key={i}
              position={[coord.latitude, coord.longitude]}
              icon={createNumberedIcon(i + 1, selectedIndex === i)}
            >
              <Popup autoOpen={selectedIndex === i}>
                <strong>{r.name}</strong><br />
                {r.rawData.address.line1}, {r.rawData.address.city}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Search Panel Overlay */}
      <div className="absolute top-4 left-4 bg-white shadow-lg z-10 width-540 max-h-[560px] overflow-scroll">
        <StationSearchBar />
        <div className="p-4 space-y-3">
          <div className="text-sm">
            Showing {results?.length || 0} stations near you
          </div>
          {results?.map((r, i) => (
            <div key={i} className="border-t pt-3"
              onClick={() => setSelectedIndex(i)}
            >
              <div className="text-xs text-gray-500 mb-1">
                {r.distance?.toFixed(1)} mi away |{" "}
                <span className="text-green-600 font-medium">Open now</span>
              </div>
              <div className="font-bold text-sm leading-tight mb-1">
                {i + 1}. {r.name}
              </div>
              <div className="text-sm text-gray-700 mb-2">
                {r.rawData.address.line1},<br />
                {r.rawData.address.city}, {r.rawData.address.region}{" "}
                {r.rawData.address.postalCode}
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${r.rawData.address.line1},${r.rawData.address.city}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 text-white text-sm px-3 py-1 rounded hover:bg-blue-800"
              >
                Get Directions
              </a>
              <div className="mt-2 text-xs text-gray-600">
                Station Top Features: 24 Hour Pay at the Pump
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobilLeafletMap;
