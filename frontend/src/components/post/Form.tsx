import React from "react";
import { Link } from "react-router-dom";
import { useMeQuery } from "../../queries/auth";

export const PostForm: React.FC = () => {
  const { data } = useMeQuery();

  return (
    <form className="post-content__comment-form post-comment-form">
      <input
        placeholder={
          data ? "Type here to leave a comment" : "Log in or sign up to leave a comment"
        }
        type="text"
        className="post-comment-form__input"
      />
      <div className="post-comment-form__buttons">
        {data ? (
          <button className="primary-btn">Send</button>
        ) : (
          <>
            <Link to="/login" className="secondary-btn">
              Log in
            </Link>
            <Link to="/registration" className="primary-btn">
              Sign up
            </Link>
          </>
        )}
      </div>
    </form>
  );
};
