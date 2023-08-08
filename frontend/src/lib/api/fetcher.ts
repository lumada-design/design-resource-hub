import axios from "axios";

import { API_URL, API_TOKEN } from "./constants";

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: { Authorization: `Bearer ${API_TOKEN}` },
});

export const fetcher = async (url: string) =>
  await api.get(url).then((res) => res.data);
