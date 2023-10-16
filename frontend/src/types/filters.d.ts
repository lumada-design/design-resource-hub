type Filter = string;
type ResourceTypes = *;
type ResourceFilters = string[];

interface FiltersState {
  searchFilter: Filter;
  resourceTypes: ResourceTypes;
  resourceFilters: ResourceFilters;
}

interface FiltersStore extends FiltersState {
  setSearchFilter: (searchFilter: Filter) => void;
  setResourceTypes: (resourceTypes: ResourcesTypes) => void;
  setResourceFilters: (resourceFilters: ResourceFilters) => void;
}
