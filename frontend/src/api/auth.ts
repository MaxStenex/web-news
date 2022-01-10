import { IRegisterFormData } from "../types/api/auth";
import { instance } from "./";

export const registerUser = ({ username, email, password }: IRegisterFormData) => {
  const formData = {
    username,
    email,
    password,
  };

  return instance.post("/auth/register", formData);
};
