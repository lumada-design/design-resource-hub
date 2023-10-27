import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useRequestDialog = () => {
  return useSWR(`/request-dialog?populate=deep`, fetcher);
};
