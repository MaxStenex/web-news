import React from "react";

type Props = {
  title: string;
  input: React.ReactNode;
};

export const FormBlock: React.FC<Props> = ({ title, input, children }) => {
  return (
    <div className="create-post-form__block">
      <h3 className="create-post-form__block-title">{title}</h3>
      <div className="create-post-form__block-input-wrapper">{input}</div>
      {children}
    </div>
  );
};
