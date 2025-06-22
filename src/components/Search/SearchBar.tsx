import React, { useState } from "react";
import { useSearchActions } from "@yext/search-headless-react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState(""); // Ensure this state is correctly declared
  const searchActions = useSearchActions();

  const handleSearch = () => {
    searchActions.setQuery(query);
    searchActions.executeVerticalQuery();
  };

  return (
    <div className="flex items-center border rounded overflow-hidden bg-white">
      <input
        type="text"
        value={query} // This binds input to state
        onChange={(e) => setQuery(e.target.value)} // This updates state
        placeholder="Search oil change near me"
        className="p-2 flex-grow outline-none text-black"
      />
      <button onClick={handleSearch} className="bg-blue-900 text-white px-4 py-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
