import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  form: React.ReactElement<HTMLFormElement>;
  footerText: string;
  footerLink: {
    text: string;
    path: string;
  };
};

export const AuthContent: React.FC<Props> = ({ title, form, footerText, footerLink }) => {
  return (
    <div className="auth-content">
      <h3 className="auth-content__title">{title}</h3>
      <div className="auth-content__main">
        {form}
        <footer className="auth-content__footer">
          <div className="auth-content__footer-text">
            {footerText} <Link to={footerLink.path}>{footerLink.text}</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};
