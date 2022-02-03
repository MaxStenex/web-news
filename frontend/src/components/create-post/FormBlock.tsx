import React from "react";
import cn from "classnames";

type Props = {
  title: string;
  input: React.ReactNode;
  inputWrapperModifier?: string;
};

export const FormBlock: React.FC<Props> = ({ title, input, inputWrapperModifier }) => {
  return (
    <div className="create-post-form__block">
      <h3 className="create-post-form__block-title">{title}</h3>
      <div
        className={cn(
          "create-post-form__block-input-wrapper",
          inputWrapperModifier
            ? `create-post-form__block-input-wrapper--${inputWrapperModifier}`
            : ""
        )}
      >
        {input}
      </div>
    </div>
  );
};
