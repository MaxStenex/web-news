import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000",
});

const getToken = (): string | null => {
  return localStorage.getItem("token");
};

const token = getToken();

instance.defaults.headers.common = { Authorization: token ? `Bearer ${token}` : "" };
