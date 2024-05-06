import * as Yup from "yup";

export const validationRules = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters")
    .required("Password is required"),
});
