import { Form, Formik } from "formik";
import React from "react";
import { MainLayout } from "../components/layouts";
import { AuthContent, InputField } from "../components/shared";

const formInitialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegistrationPage: React.FC = () => {
  return (
    <MainLayout>
      <AuthContent
        footerLink={{
          path: "/login",
          text: "Sign in.",
        }}
        form={
          <Formik
            initialValues={formInitialValues}
            onSubmit={(values: typeof formInitialValues) => {
              console.log(values);
            }}
          >
            <Form>
              <InputField
                wrapperClassName="mb-15"
                title="Username"
                name="username"
                placeholder="Enter a username..."
                error=""
              />
              <InputField
                wrapperClassName="mb-15"
                title="Email"
                type="email"
                name="email"
                placeholder="Enter your email address..."
                error=""
              />
              <InputField
                wrapperClassName="mb-15"
                title="Password"
                name="password"
                placeholder="Enter your password..."
                error=""
                type="password"
              />
              <InputField
                wrapperClassName="mb-15"
                title="Confirm password"
                name="confirmPassword"
                placeholder="Enter your password again..."
                error=""
                type="password"
              />
              <button className="primary-btn" type="submit">
                Sign up
              </button>
            </Form>
          </Formik>
        }
        footerText="Already have an account?"
        title="Register your account"
      />
    </MainLayout>
  );
};
