// components/LocationList.tsx
import React,  { useEffect } from "react";
import { VerticalResults } from "@yext/search-ui-react";
import { useSearchState } from "@yext/search-headless-react";

const LocationList: React.FC = () => {
  const results = useSearchState((state) => state.vertical.results);

  useEffect(() => {
  console.log("Results: ", results);
}, [results]);

  return (
    <div className="space-y-4">
      {results?.map((result, index) => {
        const { name, address, mainPhone } = result.rawData;

        return (
          <div key={index} className="p-4 border rounded shadow-sm">
            <div className="font-bold text-lg">{name}</div>
            <div className="text-sm text-gray-600">
              {address?.line1}, {address?.city}, {address?.region} {address?.postalCode}
            </div>
            {mainPhone && (
              <div className="text-sm text-gray-600">{mainPhone}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LocationList;
