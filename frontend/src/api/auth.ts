import { instance } from "./";

export interface IRegisterFormData {
  username: string;
  email: string;
  password: string;
}

export const registerUser = (formData: IRegisterFormData) => {
  return instance.post("/auth/register", formData);
};

export interface ILoginFormData {
  email: string;
  password: string;
}

export const loginUser = (formData: ILoginFormData) => {
  return instance.post("/auth/login", formData);
};

export const authMe = () => {
  return instance.get("/auth/me").catch(() => {});
};
