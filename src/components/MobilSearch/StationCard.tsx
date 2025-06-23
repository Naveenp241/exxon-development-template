// components/StationCard.tsx
import React from "react";

type StationCardProps = {
  name: string;
  address: string;
  distance?: string;
};

const StationCard = ({ name, address, distance }: StationCardProps) => (
  <div className="bg-white shadow rounded-lg p-4 mb-4 border border-gray-200">
    <p className="text-sm text-gray-500">{distance ?? "--"} mi away | <span className="text-green-600 font-semibold">Open now</span></p>
    <h2 className="text-lg font-bold text-gray-800 mt-1">{name}</h2>
    <p className="text-gray-600 text-sm mt-1">{address}</p>
    <div className="mt-3">
      <button className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-sm rounded">
        Get Directions
      </button>
    </div>
  </div>
);

export default StationCard;