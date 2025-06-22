import { Template, TemplateProps } from "@yext/pages";
import { SearchConfig, SearchHeadlessProvider, provideHeadless } from "@yext/search-headless-react";
import Filters from "../components/Search/Filters";
import LocationList from "../components/Search/LocationList";
import MapView from "../components/Search/MapView";
import SearchBar from "../components/Search/SearchBar";
import "../index.css";

const Search: Template<TemplateProps> = () => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
        <div className="flex flex-col h-screen">
          <div className="bg-blue-900 p-4 text-white text-xl font-bold flex items-center justify-between">
            <span>Find Nearby</span>
            <div className="w-full max-w-md">
              <SearchBar />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row flex-grow">
            <div className="lg:w-1/2 p-4 space-y-4">
              <Filters />
              <LocationList />
            </div>
            <div className="lg:w-1/2">
              <MapView />
            </div>
          </div>
        </div>
    </SearchHeadlessProvider>
  );
};
const searcher = provideHeadless(searchConfig);
const searchConfig: SearchConfig = {
  apiKey: "93809071953b06ec5b349f7ab68118e9",
  experienceKey: "locator-1",
  locale: "en",
  verticalKey: "locations",       // <- use the one from your verticals
  experienceVersion: "PRODUCTION",   // <- or "PRODUCTION"
  headlessId: "locator-search",   // <- can be any string
};

export default Search;
