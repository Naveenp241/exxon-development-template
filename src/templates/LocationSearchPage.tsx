// import * as React from "react";
// import "../index.css";
// import {
//   SearchHeadlessProvider,
//   provideHeadless,
// } from "@yext/search-headless-react";
// import {
//   SearchBar,
//   VerticalResults,
//   LocationBias,
// } from "@yext/search-ui-react";
// // import { yextConfig } from "../common/yextConfig";

// import { GetPath, TemplateProps } from "@yext/pages";
// // ...existing code...

// export const getPath: GetPath<TemplateProps> = () => {
//   return "search";
// };
// // ...existing code...

// const searcher = provideHeadless({
//   apiKey: "93809071953b06ec5b349f7ab68118e9", // your actual API key from Yext
//   experienceKey: "locator-1", // your experience key from Yext
//   locale: "en",
// });
// const LocationSearchPage = () => {
//   return (
//     <SearchHeadlessProvider searcher={searcher}>
//       <div className="max-w-5xl mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">Find an Oil Change Near You</h1>
//         <SearchBar />
//         <LocationBias />
//         <VerticalResults
//           CardComponent={({ result }) => (
//             <div className="border p-4 my-2 rounded shadow">
//               <h2 className="text-xl font-semibold">
//                 {result.name || result.rawData.name}
//               </h2>
//               <p>{result.rawData.address?.line1}</p>
//               <p>
//                 {result.rawData.city}, {result.rawData.region}
//               </p>
//               <p>{result.rawData.phone}</p>
//             </div>
//           )}
//         />
//       </div>
//     </SearchHeadlessProvider>
//   );
// };
// export default LocationSearchPage;


import * as React from "react";
import { GetPath, TemplateRenderProps } from "@yext/pages";
import {
  SearchHeadlessProvider,
  useSearchActions,
  VerticalResults
} from "@yext/search-headless-react";
import { SearchBar } from "@yext/search-ui-react";
import ResultCard from "../components/ResultCard";
import Map from "../components/Map";
import CustomSearchBar from "../components/CustomSearchBar";
import "../index.css";

export const getPath: GetPath<TemplateProps> = () => {
  return "search";
};
// ...existing code...
const LocationSearchPage = (props: TemplateRenderProps) => {
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
