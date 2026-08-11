import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  job: string;
  terms: boolean;
}

export const FormikBasicComponentsPage = () => {
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
      <h1>Formik Basic Components Page</h1>
      <hr />

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" placeholder="First Name" />
            <ErrorMessage
              name="firstName"
              component="span"
              className="error-message"
            />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" placeholder="Last Name" />
            <ErrorMessage
              name="lastName"
              component="span"
              className="error-message"
            />

            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage
              name="email"
              component="span"
              className="error-message"
            />

            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" placeholder="Password" />
            <ErrorMessage
              name="password"
              component="span"
              className="error-message"
            />

            <label htmlFor="job">Job</label>
            <Field as="select" id="job" name="job" placeholder="Job">
              <option value="">Select Job</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="mobile">Mobile Developer</option>
            </Field>
            <ErrorMessage
              name="job"
              component="span"
              className="error-message"
            />

            <label>
              <Field type="checkbox" id="terms" name="terms" placeholder="Terms and Conditions" />
              Terms and Conditions
            </label>
            <ErrorMessage
              name="terms"
              component="span"
              className="error-message"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
