import { Formik, Form } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ILoginFormData } from "../../api/auth";
import { queryClient } from "../../App";
import { useLoginMutation } from "../../mutations/auth";
import { loginSchema } from "../../validation/auth";
import { InputField } from "../shared";

const formInitialValues: ILoginFormData = {
  email: "",
  password: "",
};

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const { mutateAsync, isLoading } = useLoginMutation();

  return (
    <Formik
      initialValues={formInitialValues}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (values: ILoginFormData) => {
        try {
          const data = await mutateAsync(values);

          if (data.status === 401) {
            throw new Error("");
          }

          queryClient.invalidateQueries("me");
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      }}
      validationSchema={loginSchema}
    >
      {({ errors }) => (
        <Form>
          <InputField
            wrapperClassName="mb-15"
            title="Email"
            name="email"
            placeholder="Enter your email..."
            error={errors.email}
            type="email"
          />
          <InputField
            wrapperClassName="mb-15"
            title="Password"
            name="password"
            placeholder="Enter your password..."
            error={errors.password}
            type="password"
          />
          <button disabled={isLoading} className="primary-btn" type="submit">
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
};
