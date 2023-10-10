import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useHome = () => {
  return useSWR(`/home-page?&populate=deep`, fetcher);
};
