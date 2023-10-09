import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useIntro = () => {
  return useSWR(`/intro?&populate=deep`, fetcher);
};
