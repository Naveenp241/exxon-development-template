import { useEffect, useState, useRef } from "react";
import StationSearchBar from "./StationSearchBar";
import ToggleSwitch from "../ToggleSwitch";
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

// Helper to create numbered Leaflet markers with red (default) or blue (selected)
function createNumberedIcon(number: number, isSelected: boolean) {
  return L.divIcon({
    html: `
      <div style="position: relative; width: 36px; height: 54px;">
        <svg width="36" height="54" viewBox="0 0 36 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 0C8.05888 0 0 8.05888 0 18C0 28.2843 18 54 18 54C18 54 36 28.2843 36 18C36 8.05888 27.9411 0 18 0Z"
            fill="${isSelected ? "#1D4ED8" : "#DC2626"}"/>
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

// Zoom to first result when results change
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
  const [center, setCenter] = useState<[number, number]>([37.7749, -122.4194]); // Default to SF
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [brandType, setBrandType] = useState<"Mobil" | "Exxon">("Mobil");

  // Initial query: filter for Mobil stations + user location
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

    searchActions.setUserLocation({
      latitude: 29.461122847348097,
      longitude: -96.3391117109375,
    });

    searchActions.setQuery(""); // optional
    searchActions.executeVerticalQuery();
  }, []);

  // Center map on first result
  useEffect(() => {
    if (results?.length) {
      const first = results[0]?.rawData?.yextDisplayCoordinate;
      if (first?.latitude && first?.longitude) {
        setCenter([first.latitude, first.longitude]);
      }
    }
  }, [results]);

  // Move map to selected result
  useEffect(() => {
    if (selectedIndex !== null && results?.[selectedIndex]) {
      const coord = results[selectedIndex]?.rawData?.yextDisplayCoordinate;
      if (coord && mapRef.current) {
        mapRef.current.setView([coord.latitude, coord.longitude], 15);
      }
    }
  }, [selectedIndex, results]);
  const handleToggle = (isOn) => {
    console.log("Switch is now:", isOn);
    // You can update a filter or sort setting here if needed
    setBrandType(isOn ? "Exxon" : "Mobil");
    searchActions.setStaticFilters([
      {
        filter: {
          fieldId: "name",
          matcher: Matcher.Equals,
          value: isOn ? "Exxon" : "Mobil",
          kind: "fieldValue",
        },
        selected: true,
      },
    ]);
    searchActions.executeVerticalQuery();
  };

  return (
    <div className="relative h-screen w-full">
      {/* 📍 Fullscreen Map */}
      <MapContainer
        center={center}
        zoom={10}
        whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
        className="absolute top-0 left-0 h-full w-full z-0"
      >
        <ZoomToFirst position={center} />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {results?.map((r, i) => {
          const coord = r.rawData?.yextDisplayCoordinate;
          if (!coord) return null;

          return (
            <Marker
              key={i}
              position={[coord.latitude, coord.longitude]}
              icon={createNumberedIcon(i + 1, selectedIndex === i)}
            >
              <Popup autoOpen={selectedIndex === i}>
                <strong>{r.name}</strong><br />
                {r.rawData.address?.line1}, {r.rawData.address?.city}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* 🔍 Side Panel */}
      <div className="absolute top-4 left-4 bg-white shadow-lg z-10 w-[540px] max-h-[560px] overflow-y-auto rounded-md">
        <StationSearchBar />
        <div className="p-4 space-y-3">
          <div className="text-sm grid grid-cols-2 gap-4 content-center">
            <div>Showing {results?.length || 0} stations near you</div>
            <ToggleSwitch label={`Search By Brand: ${brandType}`} onToggle={handleToggle} />
          </div>
          {results?.map((r, i) => (
            <div
              key={i}
              className="border-t pt-3 cursor-pointer hover:bg-gray-50 rounded transition"
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
                {r.rawData.address?.line1},<br />
                {r.rawData.address?.city}, {r.rawData.address?.region}{" "}
                {r.rawData.address?.postalCode}
              </div>
              <div className="grid grid-cols-[140px_140px] gap-4">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${r.rawData.address?.line1}, ${r.rawData.address?.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-700 text-white text-sm px-3 py-2 rounded hover:bg-blue-800"
                >
                  Get Directions
                </a>
                <a
                  href={`https://locations.exxon.com/${r.rawData.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-700 text-white text-sm px-3 py-2 rounded hover:bg-blue-800"
                >
                  Visit Station
                </a>
              </div>
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
