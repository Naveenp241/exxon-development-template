import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  useSearchActions,
  useSearchState,
} from "@yext/search-headless-react";

// Helper to create numbered Leaflet markers
function createNumberedIcon(number: number) {
  return L.divIcon({
    html: `
      <div class="custom-numbered-marker">
        <span>${number}</span>
      </div>
    `,
    className: "",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });
}

const ClientLeafletMap = () => {
  const searchActions = useSearchActions();
  const results = useSearchState((state) => state.vertical.results);
  const [center, setCenter] = useState<[number, number]>([37.7749, -122.4194]); // Default to San Francisco

  // Run vertical query on mount
  useEffect(() => {
    searchActions.executeVerticalQuery();
  }, []);

  // Center map on first result
  useEffect(() => {
    if (results?.length) {
      const firstCoord = results[0].rawData?.yextDisplayCoordinate;
      if (firstCoord) {
        setCenter([firstCoord.latitude, firstCoord.longitude]);
      }
    }
  }, [results]);

  return (
    <div className="h-screen w-full">
      <MapContainer center={center} zoom={10} className="h-full w-full z-0">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {results?.map((result, index) => {
          const coord = result.rawData?.yextDisplayCoordinate;
          if (!coord) return null;

          return (
            <Marker
              key={index}
              position={[coord.latitude, coord.longitude]}
              icon={createNumberedIcon(index + 1)}
            >
              <Popup>
                <strong>{result.name}</strong>
                <br />
                {result.rawData.address?.line1}, {result.rawData.address?.city}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default ClientLeafletMap;
