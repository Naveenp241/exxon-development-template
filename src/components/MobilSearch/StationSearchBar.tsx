// components/StationSearchBar.tsx
import React from "react";
import { useSearchActions } from "@yext/search-headless-react";

const StationSearchBar = () => {
  const searchActions = useSearchActions();
  const [input, setInput] = React.useState("");

  const handleSearch = () => {
    searchActions.setQuery(input);
    searchActions.executeVerticalQuery();
  };

  return (
    <div className="bg-blue-900 p-4 flex items-center">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Enter city or zip code"
        className="w-full p-2 rounded text-black"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-white text-blue-900 font-semibold rounded"
      >
        Search
      </button>
    </div>
  );
};

export default StationSearchBar;