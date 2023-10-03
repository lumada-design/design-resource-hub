import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialState: FiltersState = {
  searchFilter: "",
  tagsFilter: [],
};

export const useFiltersStore = create(
  immer<FiltersStore>((set) => ({
    ...initialState,
    setSearchFilter: (searchFilter) =>
      set((state) => {
        state.searchFilter = searchFilter;
      }),
    setTagsFilter: (tagsFilter) =>
      set((state) => {
        state.tagsFilter = tagsFilter;
      }),
  })),
);
