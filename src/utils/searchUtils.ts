import { Matcher } from "@yext/search-headless-react";
import type { SearchActions } from "@yext/search-headless-react";

export const setBrandStaticFilter = (searchActions: SearchActions, brand: string) => {
  searchActions.setStaticFilters([
    {
      filter: {
        fieldId: "name",
        matcher: Matcher.Equals,
        value: brand,
        kind: "fieldValue"
      },
      selected: true
    }
  ]);
};

export const executeBrandSearch = (
  searchActions: SearchActions,
  brand: string,
  query?: string
) => {
  searchActions.setVertical("locations");

  if (query !== undefined) {
    searchActions.setQuery(query);
  }

  setBrandStaticFilter(searchActions, brand);

  setTimeout(() => {
    searchActions.executeVerticalQuery();
  }, 0); // Prevent race condition
};
