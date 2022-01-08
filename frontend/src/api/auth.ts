import { instance } from "./";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
};

export const registerUser = ({ username, email, password }: RegisterFormData) => {
  const formData = {
    username,
    email,
    password,
  };

  return instance.post("/users/register", formData);
};
