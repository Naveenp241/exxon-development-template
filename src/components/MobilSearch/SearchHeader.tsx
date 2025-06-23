import React from "react";

const SearchHeader = () => (
  <div className="bg-white px-6 py-8 text-center border-b border-gray-200">
    <h1 className="text-3xl font-semibold text-gray-800">Find a gas station near me</h1>
    <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
      Type a town, postcode, or address and click the "Search Location" button. You’ll see a map and a listing of Exxon and Mobil service stations in the surrounding area. For any station, click on "Get Directions" to get driving directions to the station, or "Station Details" to view more information including opening hours, address, and a map.
    </p>
    <a href="/all-stations" className="mt-4 inline-block text-blue-600 font-medium underline">
      See all Gas Station
    </a>
  </div>
);

export default SearchHeader;
