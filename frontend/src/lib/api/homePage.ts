import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useHomePage = () => {
  return useSWR(`/home-page?&populate=deep`, fetcher);
};
