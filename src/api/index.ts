import axios from "axios";

export const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://backend-web-news.herokuapp.com/",
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
