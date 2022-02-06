import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRegisterFormData } from "../../api/auth";
import { queryClient } from "../../App";
import { useRegisterMutation } from "../../mutations/auth";
import { makeToast } from "../../utils";
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
  const navigate = useNavigate();

  const [isValidated, setIsValidated] = useState(false);

  const { mutateAsync, isLoading } = useRegisterMutation();

  return (
    <Formik
      initialValues={formInitialValues}
      validateOnBlur={false}
      validateOnChange={isValidated}
      validate={() => setIsValidated(true)}
      onSubmit={async (values: IFormValues, { setErrors }) => {
        try {
          const data = await mutateAsync(values);

          const errorMessage = data.message?.toLowerCase();

          if (errorMessage?.includes("email")) {
            return setErrors({ email: errorMessage });
          }

          if (errorMessage) {
            throw new Error(errorMessage);
          }

          await queryClient.invalidateQueries("me");
          makeToast({ message: "Successfully registered", type: "success" });
          navigate("/");
        } catch (error) {
          console.log(error);
        }
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
          <button disabled={isLoading} className="primary-btn" type="submit">
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
};
