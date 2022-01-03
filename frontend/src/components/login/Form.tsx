import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../shared";

const formInitialValues = {
  username: "",
  password: "",
};

export const LoginForm: React.FC = () => {
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
          title="Login"
          name="username"
          placeholder="Enter a username or email..."
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
        <button className="primary-btn" type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};
