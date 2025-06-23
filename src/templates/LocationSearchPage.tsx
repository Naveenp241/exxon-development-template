import * as React from "react";
import { GetPath, TemplateRenderProps } from "@yext/pages";
import {
  SearchHeadlessProvider,
  provideHeadless,
  useSearchActions,
} from "@yext/search-headless-react";

import { VerticalResults } from "@yext/search-ui-react";
import ResultCard from "../components/ResultCard";
import Map from "../components/Map";
import CustomSearchBar from "../components/CustomSearchBar";
import "../index.css";

// Define the searcher outside the component
const locationSearcher = provideHeadless({
  apiKey: "93809071953b06ec5b349f7ab68118e9",
  experienceKey: "locator-1",
  locale: "en",
  endpoints: {
    universalSearch: "https://sandbox-cdn.yextapis.com/v2/accounts/me/search/universal/query",
    verticalSearch: "https://sandbox-cdn.yextapis.com/v2/accounts/me/search/vertical/query",
    questionSubmission: "https://sandbox-cdn.yextapis.com/v2/accounts/me/create/question"
  }
});

export const getPath: GetPath<TemplateRenderProps> = () => {
  return "search";
};

const SearchPageInner = () => {
  const searchActions = useSearchActions();

  React.useEffect(() => {
    searchActions.setVertical("locations");
    searchActions.executeVerticalQuery();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-[100vh]">
      <div className="w-full md:w-1/2 p-4 overflow-y-auto bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Oil Change Locations</h1>
        <CustomSearchBar />
        <VerticalResults CardComponent={ResultCard} />
      </div>
      <div className="w-full md:w-1/2 h-[300px] md:h-auto">
        <Map />
      </div>
    </div>
  );
};

const LocationSearchPage = (props: TemplateRenderProps) => {
  return (
    <SearchHeadlessProvider searcher={locationSearcher}>
      <SearchPageInner />
    </SearchHeadlessProvider>
  );
};

export default LocationSearchPage;