import { useMutation } from "react-query";
import { loginUser, registerUser } from "../api/auth";

export const useRegisterMutation = () => useMutation(registerUser);

export const useLoginMutation = () =>
  useMutation(loginUser, {
    onSuccess: (resp) => {
      const { data } = resp;

      const token = data?.access_token;

      if (!token) {
        return;
      }

      localStorage.setItem("token", token);
    },
  });
