import cn from "classnames";
import { Field } from "formik";
import React from "react";

type Props = {
  title: string;
  error?: string;
  wrapperClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputField: React.FC<Props> = ({
  wrapperClassName,
  title,
  error,
  ...inputProps
}) => {
  return (
    <label className={cn("input-field", wrapperClassName)}>
      <span className="input-field__title">{title}</span>
      <Field className="default-input" type="text" {...inputProps} />
      <span className="input-field__error">{error}</span>
    </label>
  );
};
