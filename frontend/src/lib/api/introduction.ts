import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useIntroduction = () => {
  return useSWR(`/introduction-page?&populate=deep`, fetcher);
};
