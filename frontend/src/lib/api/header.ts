import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useHeader = () => {
  return useSWR(`/header`, fetcher);
};
