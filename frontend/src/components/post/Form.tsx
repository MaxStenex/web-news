import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { useCreateCommentMutation } from "../../mutations/post";
import { useMeQuery } from "../../queries/auth";
import { createCommentSchema } from "../../validation/post";

type Props = {
  postId: number;
};

export const PostForm: React.FC<Props> = ({ postId }) => {
  const { data } = useMeQuery();

  const { mutateAsync } = useCreateCommentMutation();

  return (
    <Formik
      initialValues={{ text: "" }}
      validationSchema={createCommentSchema}
      onSubmit={async ({ text }, { resetForm }) => {
        try {
          await mutateAsync({ postId, text });
          resetForm();
        } catch (error) {}
      }}
    >
      {({ errors, isValid, dirty }) => (
        <>
          <Form className="post-content__comment-form post-comment-form">
            <Field
              placeholder={
                data
                  ? "Type here to leave a comment"
                  : "Log in or sign up to leave a comment"
              }
              type="text"
              className="post-comment-form__input"
              name="text"
            />
            <div className="post-comment-form__buttons">
              {data ? (
                <button
                  disabled={!isValid || !dirty}
                  type="submit"
                  className="primary-btn"
                >
                  Send
                </button>
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
          </Form>
          {errors.text && <div className="error-text">{errors.text}</div>}
        </>
      )}
    </Formik>
  );
};
