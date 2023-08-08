import useSWR from "swr";
import { useParams } from "react-router-dom";

import { fetcher } from "./fetcher";

export const useResources = (
  searchFilter?: string,
  tagsFilter?: TagsFilter
) => {
  const baseKey = "/resources?populate=deep";
  const searchKey = `&filters[$or][0][name][$contains]=${searchFilter}&filters[$or][1][description][$contains]=${searchFilter}`;
  const tagsKey = tagsFilter
    ?.map((tag, idx) => `&filters[$or][${idx}][tags][name][$contains]=${tag}`)
    .join("");

  return useSWR(
    `${baseKey}${searchFilter?.length ? searchKey : ""}${
      tagsFilter?.length ? tagsKey : ""
    }`,
    fetcher
  );
};

export const useResource = () => {
  const { name } = useParams();

  return useSWR(`/resources?filters[name][$eq]=${name}&populate=deep`, fetcher);
};

export const useTags = () => {
  const key = `/tags?populate=deep`;

  return useSWR(key, fetcher);
};
