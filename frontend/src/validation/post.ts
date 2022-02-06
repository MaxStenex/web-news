import * as Yup from "yup";

export const createPostSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Minimal length is 2")
    .max(100, "Maximum length is 100")
    .required("Field is required"),
  text: Yup.string()
    .min(20, "Minimal length is 20")
    .max(150, "Maximum length is 150")
    .required("Field is required"),
  category: Yup.string().required("Field is required"),
});
