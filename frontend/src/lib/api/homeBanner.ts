import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useHomeBanner = () => {
  return useSWR(`/home-banner?populate=deep`, fetcher);
};
