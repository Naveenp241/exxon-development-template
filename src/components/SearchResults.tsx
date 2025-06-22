import { useSearchState } from "@yext/search-headless-react";

export default function SearchResults() {
  const results = useSearchState((state) => state.universal.results);

  return (
    <div>
      {results?.map((vertical, index) => (
        <div key={index}>
          <h2>{vertical.verticalKey}</h2>
          {vertical.results.map((r, i) => (
            <div key={i}>
              <h3>{r.name}</h3>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
