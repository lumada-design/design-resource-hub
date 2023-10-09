import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useOverview = () => {
  return useSWR(`/overview?&populate=deep`, fetcher);
};
