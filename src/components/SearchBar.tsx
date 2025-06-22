import { useSearchActions } from "@yext/search-headless-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const searchActions = useSearchActions();

  const handleSearch = () => {
    searchActions.setQuery(query);
    searchActions.executeUniversalQuery();
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search here..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
