import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";

const searchWrapperSearcher = provideHeadless({
  apiKey: "93809071953b06ec5b349f7ab68118e9", // your actual API key from Yext
  experienceKey: "locator-1", // your experience key from Yext
  locale: "en",
});

export default function SearchWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SearchHeadlessProvider searcher={searchWrapperSearcher}>
      {children}
    </SearchHeadlessProvider>
  );
}
