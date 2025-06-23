import { useSearchActions } from "@yext/search-headless-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const searchActions = useSearchActions();

  const handleSearch = () => {
    if (query.trim() === "") return;
    searchActions.setQuery(query);
    searchActions.executeUniversalQuery();
  };

  return (
    <div className="flex items-center gap-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search here..."
        className="p-2 border rounded w-full text-black"
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
      >
        Search
      </button>
    </div>
  );
}
