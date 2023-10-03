import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useTags = () => {
    const key = `/tags?populate=deep`;

    return useSWR(key, fetcher);
};
