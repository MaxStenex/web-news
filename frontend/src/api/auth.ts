import { instance } from "./";

export interface IRegisterFormData {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (formData: IRegisterFormData) => {
  const res = await instance.post("/auth/register", formData);
  return res.data;
};

export interface ILoginFormData {
  email: string;
  password: string;
}

export const loginUser = async (formData: ILoginFormData) => {
  const res = await instance.post("/auth/login", formData);
  return res.data;
};

export const authMe = async () => {
  try {
    const res = await instance.get("/auth/me");
    return res.data;
  } catch (error) {}
};
