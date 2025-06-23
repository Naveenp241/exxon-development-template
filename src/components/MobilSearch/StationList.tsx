// components/StationList.tsx
import React, { useEffect } from "react";
import StationCard from "./StationCard";
import { useSearchState } from "@yext/search-headless-react";

const Filters = () => (
  <div className="text-right text-sm text-blue-900 underline cursor-pointer">Filters</div>
);

const StationList = () => {
   const results = useSearchState((state) => state.vertical.results);
  
    useEffect(() => {
    console.log("Results: ", results);
  }, [results]);
  return (
    <div className="bg-gray-100 p-4">
      <div className="text-gray-500 mb-2">
        Showing {results?.length} stations near you
      </div>
      <Filters />
      {results?.map((r, idx) => (
        <div
          key={r.id}
          className="bg-white p-4 mt-4 border-l-4 border-blue-600 shadow-sm"
        >
          <div className="text-sm text-gray-500">{r.distance?.toFixed(1)} mi away | <span className="text-green-600 font-medium">Open now</span></div>
          <div className="text-lg font-semibold">{r.name}</div>
          <div className="text-sm text-gray-700">{r.address?.line1}, {r.address?.city}, {r.address?.region} {r.address?.postalCode}</div>
          <button className="mt-2 bg-blue-900 text-white px-3 py-2 rounded flex items-center">
            Get Directions <span className="ml-2">↗</span>
          </button>
          {r.c_topFeatures && <div className="mt-2 text-xs">Station Top Features: {r.c_topFeatures}</div>}
        </div>
      ))}
    </div>
  );
};

export default StationList;
