// components/StationMap.tsx
import React, { useState, useEffect } from "react";

const StationMap: React.FC = () => {
     const [MapComponent, setMapComponent] = useState<React.FC | null>(null);
     useEffect(() => {
    import("./MobilLeafletMap").then((mod) => {
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


export default StationMap;