import React, { useState } from "react";
import { useSearchActions } from "@yext/search-headless-react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const searchActions = useSearchActions();

  const handleSearch = () => {
    if (query.trim() === "") return;
    searchActions.setQuery(query);
    searchActions.executeVerticalQuery();
  };

  return (
    <div className="flex items-center border rounded overflow-hidden bg-white shadow">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search oil change near me"
        className="p-2 flex-grow outline-none text-black"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
