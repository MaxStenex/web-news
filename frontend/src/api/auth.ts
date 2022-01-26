import { ILoginFormData, IRegisterFormData } from "../types/api/auth";
import { instance } from "./";

export const registerUser = ({ username, email, password }: IRegisterFormData) => {
  const formData = {
    username,
    email,
    password,
  };

  return instance.post("/auth/register", formData);
};

export const loginUser = ({ email, password }: ILoginFormData) => {
  const formData = {
    email,
    password,
  };

  return instance.post("/auth/login", formData);
};

export const authMe = () => {
  return instance.get("/auth/me");
};
