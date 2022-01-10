import { Formik, Form } from "formik";
import React from "react";
import { IRegisterFormData } from "../../types/api/auth";
import { registerSchema } from "../../validation/auth";
import { InputField } from "../shared";

interface IFormValues extends IRegisterFormData {
  confirmPassword: string;
}

const formInitialValues: IFormValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm: React.FC = () => {
  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={(values: IFormValues) => {
        console.log(values);
      }}
      validationSchema={registerSchema}
    >
      {({ errors }) => (
        <Form>
          <InputField
            wrapperClassName="mb-15"
            title="Username"
            name="username"
            placeholder="Enter a username..."
            error={errors.username}
          />
          <InputField
            wrapperClassName="mb-15"
            title="Email"
            type="email"
            name="email"
            placeholder="Enter your email address..."
            error={errors.email}
          />
          <InputField
            wrapperClassName="mb-15"
            title="Password"
            name="password"
            placeholder="Enter your password..."
            error={errors.password}
            type="password"
          />
          <InputField
            wrapperClassName="mb-15"
            title="Confirm password"
            name="confirmPassword"
            placeholder="Enter your password again..."
            error={errors.confirmPassword}
            type="password"
          />
          <button className="primary-btn" type="submit">
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
};
