import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterFormikPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 3 characters")
      .max(15, "Name must be at most 15 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleSubmit = (values: FormValues) => {
    console.log("Form Data:", values);
  };

  return (
    <div>
      <h1>Register Pages</h1>
      <hr />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleReset }) => (
          <Form noValidate>
            <MyTextInput name="name" label="Name" placeholder="Name" />
            <MyTextInput
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
            />
            <MyTextInput
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
            />
            <MyTextInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
            />

            <button type="submit">Register</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
