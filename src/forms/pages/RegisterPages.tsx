import { SubmitEvent } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPages = () => {
  const {
    formData,
    handleChange,
    resetForm,
    isValidEmail,
    name,
    email,
    password,
    confirmPassword,
  } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Data:',formData);
  };

  return (
    <div>
      <h1>Register Pages</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && (
          <span className="error-message">Name is required</span>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && (
          <span className="error-message">Email is not valid</span>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          className={`${password.trim().length < 6 && "has-error"}`}
        />
        {password.trim().length <= 0 && (
          <span className="error-message">Password is required</span>
        )}
        {password.trim().length >0 && password.trim().length < 6 && (
          <span className="error-message">
            Password must be at least 6 characters
          </span>
        )}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />
        {confirmPassword.trim().length <= 0 && ( 
            <span className="error-message">Confirm Password is required</span>
        )}

        <button type="submit">Register</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
