import useSWR from "swr";
import { useParams } from "react-router-dom";

import { fetcher } from "./fetcher";

export const useResources = (
  searchFilter?: string,
  tagsFilter?: TagsFilter,
) => {
  const searchKey = `&filters[$or][0][title][$containsi]=${searchFilter}&filters[$or][1][description][$containsi]=${searchFilter}`;
  const tagsKey = tagsFilter
    ?.map((tag) => `&filters[tags][id][$eq]=${tag}`)
    .join("");

  return useSWR(
    `/resources?${searchFilter?.length ? searchKey : ""}${tagsFilter?.length ? tagsKey : ""
    }&populate=deep`,
    fetcher,
  );
};

export const useResource = () => {
  const { name } = useParams();


  return useSWR(`/resources?filters[title][$eq]=${name}&populate=deep`, fetcher);
};
