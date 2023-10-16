import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { useParams } from "react-router-dom";

import { addPluralIfNeeded } from "lib/utils";
import { fetcher } from "./fetcher";

const filterTypes = (types) => {
  return types?.filter((type) => !type.disabled);
};

export const useResources = (
  searchFilter?: string,
  resourceFilters?: ResourceFilters,
  resourceTypes?: ResourceTypes,
) => {
  const searchKey = `&filters[$or][0][name][$containsi]=${searchFilter}&filters[$or][1][description][$containsi]=${searchFilter}`;
  const resourceKeys = resourceFilters
    ?.map((filter) => {
      // Filter the disabled resource types
      const filteredTypes = filterTypes(resourceTypes);
      // Loop through the resource types and filter the disabled ones
      return filteredTypes.map(
        (type, idx) => `&filters[$or][${idx}][resource_${type.name}][name][$containsi]=${filter}`,
      ).join("");
    })
    .join("");

  return useSWR(
    `/resources?${searchFilter?.length ? searchKey : ""}${resourceFilters?.length ? resourceKeys : ""
    }&populate=deep`,
    fetcher,
  );
};

export const useResource = () => {
  const { id } = useParams();

  return useSWR(`/resources?filters[id][$eq]=${id}&populate=deep`, fetcher);
};

export const useResourceCategories = () => {
  return useSWR(`/resource-categories?populate=deep`, fetcher);
};

export const useResourceTags = (resourceTypes) => {
  // Filter the disabled resource types
  const filteredTypes = filterTypes(resourceTypes);

  return useSWRInfinite(
    (idx) => `/resource-${addPluralIfNeeded(filteredTypes[idx].name)}?populate=deep`,
    fetcher,
    {
      initialSize: filteredTypes.length,
      parallel: true,
    },
  );
};
