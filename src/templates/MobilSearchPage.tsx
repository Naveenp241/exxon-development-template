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
import { Header } from "../components/Header/Header";
import StationSearchBar from "../components/MobilSearch/StationSearchBar";
import StationList from "../components/MobilSearch/StationList";
import StationMap from "../components/MobilSearch/StationMap";

import "../index.css";

// -------------------- Template Config --------------------

export const config: TemplateConfig = {
  stream: {
    $id: "mobil-search-page-stream",
    fields: ["id", "uid", "meta", "name", "slug"],
    filter: {
      entityIds: ["mobil-search"], // ← Must match your entity ID in Knowledge Graph
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

interface MenuProps {
  title: string;
  path: string;
  items?: MenuProps[];
}

const transformMenuData = (data: any[]): MenuProps[] => {
  return data?.map((level1: any) => ({
    title: level1.level1Label?.label ?? "",
    path: level1.level1Label?.addURL ?? "#",
    items:
      level1.sublevel2?.map((level2: any) => ({
        title: level2.level2Label?.label ?? "",
        path: level2.level2Label?.addURL ?? "#",
        items:
          level2.sublevel3?.map((level3: any) => ({
            title: level3.level3Label?.label ?? "",
            path: level3.level3Label?.addURL ?? "#",
          })) ?? [],
      })) ?? [],
  }));
};

// -------------------- Page Template --------------------

const MobilSearchPage: Template<TemplateProps> = ({ document }) => {
  const {
    c_testMegaMenu,
  } = document;
  // ✅ Moved searchConfig and provideHeadless inside the component to avoid TDZ
  const searchConfig: SearchConfig = {
    apiKey: "93809071953b06ec5b349f7ab68118e9",
    experienceKey: "locator-1",
    locale: "en",
    verticalKey: "locations",
    experienceVersion: "PRODUCTION",
    headlessId: "locator-search",
  };

  const mobilSearcher = provideHeadless(searchConfig);
  const menuItems = transformMenuData(c_testMegaMenu ?? []);

  return (
    <>
      <Header
        enableMegaMenu
        navLinks={menuItems}
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />
      <SearchHeadlessProvider searcher={mobilSearcher}>
        <div className="min-h-screen overflow-y-auto px-4 md:px-8 lg:px-20 xl:px-32 bg-gray-50">
          <div className="py-10">
            <h1 className="text-2xl font-semibold text-gray-800">
              Find a gas station near me
            </h1>
            <p className="text-gray-600 text-sm mt-2">
              Type a town, postcode, or address and click the "Search Location" button.
              You'll see a map and a listing of Exxon and Mobil service stations in the surrounding area.
              For any station, click on "Get Directions" to get driving directions to the station,
              or "Station Details" to view more information for each station including opening hours,
              amenities, address, telephone number, and a map.
            </p>
            <p className="text-gray-600 text-sm mt-6 mb-8">
              To find a service station, please enter the location in the search box below!
            </p>
            <a
              href="#"
              className="text-blue-700 underline text-sm mt-1 inline-block mb-10"
            >
              See all Gas Station
            </a>
          </div>

          {/* Layout: Sidebar + Map */}
          <div className="flex flex-col lg:flex-row gap-4 pb-10">
            {/* Sidebar or Station List Panel */}
            {/* <div className="w-full lg:w-[480px] bg-white shadow rounded-lg p-4 z-10"> */}
              {/* Example: Uncomment to show search/list */}
              {/* <StationSearchBar /> */}
              {/* <StationList /> */}
            {/* </div> */}

            {/* Map */}
            <div className="flex-1 rounded-lg overflow-hidden">
              <StationMap />
            </div>
          </div>
        </div>
      </SearchHeadlessProvider>
    </>
  );
};

export default MobilSearchPage;
