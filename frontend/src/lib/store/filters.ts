import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialState: FiltersState = {
  searchFilter: "",
  resourceTypes: [],
  resourceFilters: [],
};

export const useFiltersStore = create(
  immer<FiltersStore>((set) => ({
    ...initialState,
    setSearchFilter: (searchFilter) =>
      set((state) => {
        state.searchFilter = searchFilter;
      }),
    setResourceTypes: (resourceTypes) =>
      set((state) => {
        state.resourceTypes = resourceTypes;
      }),
    setResourceFilters: (resourceFilters) =>
      set((state) => {
        state.resourceFilters = resourceFilters;
      }),
  })),
);
