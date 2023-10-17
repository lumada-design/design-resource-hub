import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useResourcePage = () => {
  return useSWR(`/resource-page?&populate=deep`, fetcher);
};
