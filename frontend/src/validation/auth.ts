import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Minimal length is 2")
    .max(100, "Maximum length is 100")
    .required("Field is required"),
  email: Yup.string().email("Email is invalid").required("Field is required"),
  password: Yup.string()
    .min(6, "Minimal length is 6")
    .max(255, "Maximum length is 255")
    .required("Field is required"),
  confirmPassword: Yup.string().test(
    "passwords-match",
    "Passwords are not equal",
    function (value) {
      return this.parent.password === value;
    }
  ),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Field is required"),
  password: Yup.string().required("Field is required"),
});
