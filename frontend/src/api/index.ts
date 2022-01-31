import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000",
});

const getToken = (): string | null => {
  return localStorage.getItem("token");
};

instance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers["Authorization"] = "Bearer " + getToken();
  }

  return config;
});
