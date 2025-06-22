// pages/search.tsx
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
} from "@yext/search-headless-react";

// Component imports
import StationSearchBar from "../components/MobilSearch/StationSearchBar";
import StationList from "../components/MobilSearch/StationList";
import StationMap from "../components/MobilSearch/StationMap";

import "../index.css";

// -------------------- Config --------------------

export const config: TemplateConfig = {
  stream: {
    $id: "mobil-search-page-stream",
    fields: ["id", "uid", "meta", "name", "slug"],
    filter: {
      entityIds: ["mobil-search"], // <- matches your Knowledge Graph entity ID
    },
    localization: {
      locales: ["en"],
      primary: true,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug}`;
};

export const getHeadConfig: GetHeadConfig<TemplateProps> = ({ document }) => ({
  title: document.name,
});

// -------------------- Search Config --------------------

const searchConfig: SearchConfig = {
  apiKey: "93809071953b06ec5b349f7ab68118e9",
  experienceKey: "locator-1",
  locale: "en",
  verticalKey: "locations",
  experienceVersion: "PRODUCTION",
  headlessId: "locator-search",
};

const searcher = provideHeadless(searchConfig);

// -------------------- Page Template --------------------

const MobilSearchPage: Template<TemplateProps> = () => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="flex flex-col h-screen">
        <div className="px-8 pt-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Find a gas station near me
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Type a town, postcode, or address and click the "Search Location" button. <br />
            You'll see a map and a listing of Exxon and Mobil service stations in the surrounding area. <br />
            Click on "Get Directions" to get driving directions to the station, or "Station Details" to view more info.
          </p>
          <a
            href="#"
            className="text-blue-700 underline text-sm mt-1 inline-block"
          >
            See all Gas Station
          </a>
        </div>

        {/* Optional: Add a search bar and results panel */}
        {/* <StationSearchBar /> */}
        {/* <StationList /> */}

        {/* Map Component */}
        <StationMap />
      </div>
    </SearchHeadlessProvider>
  );
};

export default MobilSearchPage;
