import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { useParams } from "react-router-dom";

import { addPluralIfNeeded } from "lib/utils";
import { fetcher } from "./fetcher";

export const useResources = (
  searchFilter?: string,
  resourceFilters?: ResourceFilters,
  resourceTypes?: ResourceTypes,
) => {
  const searchKey = `&filters[$or][0][name][$containsi]=${searchFilter}&filters[$or][1][description][$containsi]=${searchFilter}`;
  const resourceKeys = resourceFilters
    ?.map((filter) =>
      resourceTypes
        .map(
          (type, idx) =>
            `&filters[$or][${idx}][resource_${type}][name][$containsi]=${filter}`,
        )
        .join(""),
    )
    .join("");

  return useSWR(
    `/resources?${searchFilter?.length ? searchKey : ""}${
      resourceFilters?.length ? resourceKeys : ""
    }&populate=deep`,
    fetcher,
  );
};

export const useResource = () => {
  const { id } = useParams();

  return useSWR(`/resources?filters[id][$eq]=${id}&populate=deep`, fetcher);
};

export const useResourceTags = (resourceTypes) => {
  return useSWRInfinite(
    (idx) => `/resource-${addPluralIfNeeded(resourceTypes[idx])}?populate=deep`,
    fetcher,
    {
      initialSize: resourceTypes.length,
      parallel: true,
    },
  );
};
