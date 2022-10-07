import * as yup from "yup";

export const registerSchema = yup.object({
  firstName: yup
    .string("* First Name should be a string")
    .min(2, "* Min length is 2 characters")
    .required("* First Name is required"),
  lastName: yup
    .string("* Last Name should be a string")
    .min(2, "* Min length is 2 characters")
    .required("* Last Name is required"),
  email: yup.string().email().required().required("* Email is required"),
  password: yup
    .string()
    .min(5, "* Min length is 5 characters")
    .max(16, "* Max length is 16 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{5,}$/,
      "* Password should contain a letter, a number and a special character"
    )
    .required("* Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "* The passwords should matches")
    .required("* Confirm password is required"),
});

export const loginSchema = yup.object({
  email: yup.string().email().required().required("* Email is required"),
  password: yup
    .string()
    .min(5, "* Min length is 5 characters")
    .max(16, "* Max length is 16 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{5,}$/,
      "* Password should contain a letter, a number and a special character"
    )
    .required("* Password is required"),
});
