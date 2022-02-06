import React from "react";
import { Navigate } from "react-router-dom";
import { useMeQuery } from "../queries/auth";

type Props = {
  component: JSX.Element;
};

export const PrivateRoute: React.FC<Props> = ({ component }) => {
  const { data, isLoading } = useMeQuery();

  if (isLoading) {
    return null;
  }

  return data?.id ? component : <Navigate to="/login" />;
};
