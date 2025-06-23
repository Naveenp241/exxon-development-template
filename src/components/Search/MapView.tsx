import React, { useState, useEffect } from "react";
// import ClientLeafletMap from "./ClientLeafletMap";

const MapView: React.FC = () => {
     const [MapComponent, setMapComponent] = useState<React.FC | null>(null);
     useEffect(() => {
    import("./ClientLeafletMap").then((mod) => {
      setMapComponent(() => mod.default);
    });
  }, []);

  return (
    <div>
      {MapComponent ? (
        <MapComponent />
      ) : (
        <p className="text-center text-gray-500">Loading map...</p>
      )}
    </div>
  );
};

export default MapView;