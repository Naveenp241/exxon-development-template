// components/StationSearchBar.tsx
import React, { useState } from "react";
import { useSearchActions } from "@yext/search-headless-react";

const StationSearchBar: React.FC = () => {
  const searchActions = useSearchActions();
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() === "") return;
    searchActions.setQuery(input);
    searchActions.executeVerticalQuery();
  };

  return (
    <div className="bg-blue-900 p-4 flex items-center rounded shadow">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Enter city or zip code"
        className="w-full p-2 rounded text-black outline-none"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-white text-blue-900 font-semibold rounded hover:bg-gray-200 transition"
      >
        Search
      </button>
    </div>
  );
};

export default StationSearchBar;
