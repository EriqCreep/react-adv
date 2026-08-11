import { FormikErrors, useFormik } from "formik";

import "../styles/styles.css";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const FormikBasicPage = () => {

  const validateForm = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.firstName.trim()) {
      errors.firstName = "First Name is required";
    } else if (values.firstName.trim().length < 3) {
      errors.firstName = "First Name must be at least 3 characters";
    }
    if (!values.lastName.trim()) {
      errors.lastName = "Last Name is required";
    } else if (values.lastName.trim().length < 3) {
      errors.lastName = "Last Name must be at least 3 characters";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email is not valid";
    }
    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (values.password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log('Form Data:',values);
    },
    validate: validateForm
  });



  return (
    <div>
      <h1>Formik Basic Page</h1>
      <hr />

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
        {touched.firstName && errors.firstName && <span className="error-message">{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
        {touched.lastName && errors.lastName && <span className="error-message">{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
        {touched.email && errors.email && <span className="error-message">{errors.email}</span>}

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
        {touched.password && errors.password && <span className="error-message">{errors.password}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
