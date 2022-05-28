import React from "react";
import { MainLayout } from "../components/layouts";
import { RegisterForm } from "../components/register";
import { AuthContent } from "../components/shared";

export const RegistrationPage: React.FC = () => {
  return (
    <MainLayout>
      <AuthContent
        footerLink={{
          path: "/login",
          text: "Sign in.",
        }}
        form={<RegisterForm />}
        footerText="Already have an account?"
        title="Register your account"
      />
    </MainLayout>
  );
};
