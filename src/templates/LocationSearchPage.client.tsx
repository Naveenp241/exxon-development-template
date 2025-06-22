import { SearchHeadlessProvider, useSearchActions } from "@yext/search-headless-react";
import * as React from "react";
import CustomSearchBar from "../components/CustomSearchBar";
import Map from "../components/Map";
import ResultCard from "../components/ResultCard";
import "../index.css";

const LocationSearchPage = () => {
  const searchActions = useSearchActions();

  React.useEffect(() => {
    searchActions.setVertical("locations");
    searchActions.executeVerticalQuery();
  }, []);

  return (
    <SearchHeadlessProvider config={{
      apiKey: "93809071953b06ec5b349f7ab68118e9", // your actual API key from Yext
      experienceKey: "locator-1", // your experience key from Yext
      locale: "en",
      endpoints: {
        universalSearch: "https://sandbox-cdn.yextapis.com/v2/accounts/me/search/universal/query",
        verticalSearch: "https://sandbox-cdn.yextapis.com/v2/accounts/me/search/vertical/query",
        questionSubmission: "https://sandbox-cdn.yextapis.com/v2/accounts/me/create/question"
      }
    }}>
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
    </SearchHeadlessProvider>
  );
};

export default LocationSearchPage;
