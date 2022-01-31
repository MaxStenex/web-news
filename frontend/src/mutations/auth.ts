import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { loginUser, registerUser } from "../api/auth";

const afterAuthSuccess = async (resp: AxiosResponse) => {
  const { data } = resp;

  const token = data?.access_token;

  if (!token) {
    return;
  }

  localStorage.setItem("token", token);
};

export const useRegisterMutation = () =>
  useMutation(registerUser, {
    onSuccess: (resp) => {
      afterAuthSuccess(resp);
    },
  });

export const useLoginMutation = () =>
  useMutation(loginUser, {
    onSuccess: (resp) => {
      afterAuthSuccess(resp);
    },
  });
