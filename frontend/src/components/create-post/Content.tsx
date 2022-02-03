import { Field, FieldProps, Form, Formik } from "formik";
import React from "react";
import { FormBlock } from ".";

const formInitialValues = {
  title: "",
  text: "",
};

export const CreatePostContent: React.FC = () => {
  return (
    <div className="create-post-content">
      <div className="create-post-content__wrapper">
        <h2 className="create-post-content__title">Create Post</h2>
        <Formik
          initialValues={formInitialValues}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (values) => {
            try {
              console.log(values);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Form className="create-post-content__form create-post-form">
            <FormBlock
              input={
                <Field name="title">
                  {({ field }: FieldProps) => (
                    <textarea {...field} placeholder="Title of post" />
                  )}
                </Field>
              }
              title="Title"
            />
            <FormBlock
              input={
                <Field name="text">
                  {({ field }: FieldProps) => (
                    <textarea
                      {...field}
                      name="text"
                      placeholder="Text of post"
                      className="create-post-form__textarea--text"
                    />
                  )}
                </Field>
              }
              title="Text"
              inputWrapperModifier="text"
            />
            <div className="create-post-content__buttons">
              <button
                className="primary-btn create-post-content__button--submit"
                type="submit"
              >
                Submit
              </button>
              <button
                type="button"
                className="default-btn create-post-content__button--cancel"
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
