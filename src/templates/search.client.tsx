import { Template, TemplateProps } from "@yext/pages";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import SearchWrapper from "../components/SearchWrapper";

const Search: Template<TemplateProps> = () => {
  return (
    <SearchWrapper>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Search Page</h1>
        <SearchBar />
        <SearchResults />
      </div>
    </SearchWrapper>
  );
};

export default Search;
