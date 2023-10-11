import { API_URL } from "lib/api/constants";

export const formatText = (str?: string) => {
    return str?.replace(/\\n/g, "\n");
};

export const formatUrl = (url: string) => {
    const isURL = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/.test(url);

    return isURL ? url : `${API_URL}${url}`;
};
