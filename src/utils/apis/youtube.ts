import axios from "axios";
import { YT_API_KEY, BASE_YT_URL } from "../constants";

const instance = axios.create({
  baseURL: BASE_YT_URL
});

instance.interceptors.request.use(config => {
  config.params = {
    part: "snippet",
    maxResults: 12,
    key: YT_API_KEY,
    ...config.params
  };
  return config;
});

export default instance;
