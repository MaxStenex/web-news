import { useMutation } from "react-query";
import { loginUser, registerUser } from "../api/auth";

export const useRegisterMutation = () => useMutation(registerUser);

export const useLoginMutation = () => useMutation(loginUser);
