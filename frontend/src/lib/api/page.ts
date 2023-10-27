import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useHomePage = () => {
  return useSWR(`/home-page?&populate=deep`, fetcher);
};

export const useIntroPage = () => {
  return useSWR(`/introduction-page?&populate=deep`, fetcher);
};

export const useResourcePage = () => {
  return useSWR(`/resource-page?&populate=deep`, fetcher);
};

export const useTermsUsePage = () => {
  return useSWR(`/terms-use-page?&populate=deep`, fetcher);
};

export const useTermsContributePage = () => {
  return useSWR(`/terms-contribute-page?&populate=deep`, fetcher);
};
