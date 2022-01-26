import { useQuery } from "react-query";
import { authMe } from "../api/auth";

export const useMeQuery = () =>
  useQuery("me", authMe, {
    retry: false,
    retryOnMount: false,
    refetchOnMount: false,
  });
