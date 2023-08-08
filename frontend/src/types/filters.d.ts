type Filter = string;
type TagsFilter = string[];

interface FiltersState {
  searchFilter: Filter;
  tagsFilter: TagsFilter;
}

interface FiltersStore extends FiltersState {
  setSearchFilter: (searchFilter: Filter) => void;
  setTagsFilter: (tagsFilter: TagsFilter) => void;
}
