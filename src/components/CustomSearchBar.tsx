import React from "react";
import { useSearchActions } from "@yext/search-headless-react";

import "../index.css";

const CustomSearchBar = () => {
  const searchActions = useSearchActions();
  const [input, setInput] = React.useState("");

  const handleSearch = () => {
    searchActions.setQuery(input);
    searchActions.executeVerticalQuery();
  };

  return (
    <div className="flex items-center mb-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter city or zip code"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
      >
        🔍
      </button>
    </div>
  );
};

export default CustomSearchBar;
