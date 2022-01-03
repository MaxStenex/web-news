import React from "react";
import { MainLayout } from "../components/layouts";
import { LoginForm } from "../components/login";
import { AuthContent } from "../components/shared";

export const LoginPage = () => {
  return (
    <MainLayout>
      <AuthContent
        form={<LoginForm />}
        title="Log in to your account"
        footerText="New user?"
        footerLink={{
          path: "/registration",
          text: "Sign up.",
        }}
      />
    </MainLayout>
  );
};
