import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useBrand = () => {
  return useSWR(`/brand`, fetcher);
};
