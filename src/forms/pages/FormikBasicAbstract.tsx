import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  job: string;
  terms: boolean;
}

export const FormikBasicAbstractPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    job: "",
    terms: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .min(3, "First Name must be at least 3 characters")
      .max(15, "First Name must be at most 15 characters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(3, "Last Name must be at least 3 characters")
      .max(15, "Last Name must be at most 15 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    job: Yup.string().required("Job is required").notOneOf(["mobile"], "You can't be a mobile"),
    terms: Yup.boolean().isTrue("You must accept terms and conditions"),
  });

  const handleSubmit = (values: FormValues) => {
    console.log("Form Data:", values);
  };

  return (
    <div>
      <h1>Formik Basic Abstract Page</h1>
      <hr />

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            <MyTextInput name="firstName" label="First Name" placeholder="First Name" />

            <MyTextInput name="lastName" label="Last Name" placeholder="Last Name" />

            <MyTextInput name="email" label="Email" type="email" placeholder="Email" />

            <MyTextInput name="password" label="Password" type="password" placeholder="Password" />

            <MySelect name="job" label="Job" placeholder="Job">
              <option value="">Select Job</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="mobile">Mobile Developer</option>
            </MySelect>

            <MyCheckbox name="terms" label="Terms and Conditions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
