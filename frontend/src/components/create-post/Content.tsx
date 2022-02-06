import { Field, FieldProps, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormBlock } from ".";
import { ICreatePostFormData } from "../../api/post";
import { useCreatePostMutation } from "../../mutations/post";
import { useCategoriesQuery } from "../../queries/post";
import { createPostSchema } from "../../validation/post";

const formInitialValues: ICreatePostFormData = {
  title: "",
  text: "",
  category: "",
};

export const CreatePostContent: React.FC = () => {
  const { data: categories, isLoading } = useCategoriesQuery();
  const { mutateAsync, isLoading: isPostCreating } = useCreatePostMutation();

  const [isValidated, setIsValidated] = useState(false);

  const navigate = useNavigate();

  const onCancelClick = () => {
    navigate("/");
  };

  return (
    <div className="create-post-content">
      <div className="create-post-content__wrapper">
        <h2 className="create-post-content__title">Create Post</h2>
        <Formik
          initialValues={formInitialValues}
          validateOnBlur={false}
          validateOnChange={isValidated}
          validationSchema={createPostSchema}
          validate={() => setIsValidated(true)}
          onSubmit={async (values) => {
            try {
              await mutateAsync(values);
              navigate("/");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ errors, isValid }) => (
            <Form className="create-post-content__form create-post-form">
              <FormBlock
                input={
                  <Field name="title">
                    {({ field }: FieldProps) => (
                      <textarea
                        className="create-post-form__textarea"
                        {...field}
                        placeholder="Title of post"
                      />
                    )}
                  </Field>
                }
                title="Title"
              >
                {errors.title && <span className="error-text">{errors.title}</span>}
              </FormBlock>
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
              >
                {errors.text && <span className="error-text">{errors.text}</span>}
              </FormBlock>
              <FormBlock
                input={
                  <Field
                    disabled={isLoading}
                    as="select"
                    name="category"
                    className="create-post-form__select"
                  >
                    <option disabled value="">
                      Select category
                    </option>
                    {categories?.map((c: string) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Field>
                }
                title="Text"
              >
                {errors.category && <span className="error-text">{errors.category}</span>}
              </FormBlock>
              <div className="create-post-content__buttons">
                <button
                  className="primary-btn create-post-content__button--submit"
                  type="submit"
                  disabled={isLoading || !isValid || isPostCreating}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="default-btn create-post-content__button--cancel"
                  onClick={onCancelClick}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
