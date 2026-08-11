import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const FormikBasicYupPage = () => {
  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log('Form Data:',values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required").min(3, "First Name must be at least 3 characters").max(15, "First Name must be at most 15 characters"),
      lastName: Yup.string().required("Last Name is required").min(3, "Last Name must be at least 3 characters").max(15, "Last Name must be at most 15 characters"),
      email: Yup.string().required("Email is required").email("Email is not valid"),
      password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    }),
  });

  return (
    <div>
      <h1>Formik Basic Yup Page</h1>
      <hr />

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && <span className="error-message">{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span className="error-message">{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span className="error-message">{errors.email}</span>}

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...getFieldProps("password")} />
        {touched.password && errors.password && <span className="error-message">{errors.password}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
