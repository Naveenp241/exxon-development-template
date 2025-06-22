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
  const [center, setCenter] = useState<[number, number]>([37.7749, -122.4194]);

  useEffect(() => {
    searchActions.executeVerticalQuery();
  }, []);

  useEffect(() => {
    if (results?.length) {
      const first = results[0].rawData?.yextDisplayCoordinate;
      if (first) setCenter([first.latitude, first.longitude]);
    }
  }, [results]);

  return (
    <div className="h-screen w-full">
      <MapContainer center={center} zoom={10} className="h-full w-full z-0">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {results?.map((r, i) => {
          const coord = r.rawData.yextDisplayCoordinate;
          if (!coord) return null;
          return (
            <Marker key={i} position={[coord.latitude, coord.longitude]} icon={createNumberedIcon(i + 1)}>
              <Popup>
                <strong>{r.name}</strong>
                <br />
                {r.rawData.address.line1}, {r.rawData.address.city}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default ClientLeafletMap;
