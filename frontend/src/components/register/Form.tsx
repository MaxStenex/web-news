import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../shared";

const formInitialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm: React.FC = () => {
  return (
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
  );
};
