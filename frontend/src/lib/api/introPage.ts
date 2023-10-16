import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useIntroPage = () => {
  return useSWR(`/introduction-page?&populate=deep`, fetcher);
};
