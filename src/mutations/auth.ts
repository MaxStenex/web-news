import { useMutation } from "react-query";
import { loginUser, registerUser } from "../api/auth";

const afterAuthSuccess = async (data: any) => {
  const token = data?.access_token;

  if (!token) {
    return;
  }

  localStorage.setItem("token", token);
};

export const useRegisterMutation = () =>
  useMutation(registerUser, {
    onSuccess: (data) => {
      afterAuthSuccess(data);
    },
  });

export const useLoginMutation = () =>
  useMutation(loginUser, {
    onSuccess: (data) => {
      afterAuthSuccess(data);
    },
  });
