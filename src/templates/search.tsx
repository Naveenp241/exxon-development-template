import * as React from "react";
import {
  Template,
  GetPath,
  GetHeadConfig,
  TemplateConfig,
  TemplateProps,
} from "@yext/pages";
import {
  SearchHeadlessProvider,
  SearchConfig,
  provideHeadless,
  useSearchActions,
  VerticalResults
} from "@yext/search-headless-react";

// import ResultCard from "../components/ResultCard";
// import Map from "../components/Map";
// import CustomSearchBar from "../components/CustomSearchBar";

import SearchBar from "../components/Search/SearchBar";
import Filters from "../components/Search/Filters";
import LocationList from "../components/Search/LocationList";
import MapView from "../components/Search/MapView";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "search-page-stream",
    fields: ["id", "uid", "meta", "name", "slug"],
    filter: {
      entityTypes: ["ce_searchPage"]
    },
    localization: {
      locales: ["en"],
      primary: true
    }
  }
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `location-search/${document.slug}`;
};

export const getHeadConfig: GetHeadConfig<TemplateProps> = ({ document }) => ({
  title: document.name
});

 const searchConfig: SearchConfig = {
  apiKey: "93809071953b06ec5b349f7ab68118e9",
  experienceKey: "locator-1",
  locale: "en",
  verticalKey: "locations",       // <- use the one from your verticals
  experienceVersion: "PRODUCTION",   // <- or "PRODUCTION"
  headlessId: "locator-search",   // <- can be any string
};

const searcherSearch = provideHeadless(searchConfig);

const Search: Template<TemplateProps> = () => {
  return (
    <SearchHeadlessProvider searcher={searcherSearch}>
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

export default Search;