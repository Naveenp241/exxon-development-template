import React, { useState } from "react";
import { useSearchActions } from "@yext/search-headless-react";
import "../index.css";

const CustomSearchBar: React.FC = () => {
  const searchActions = useSearchActions();
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() === "") return;
    searchActions.setQuery(input);
    searchActions.executeVerticalQuery();
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="w-full border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        placeholder="Enter city or zip code"
        aria-label="Search by city or zip"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
        aria-label="Search"
      >
        🔍
      </button>
    </div>
  );
};

export default CustomSearchBar;
