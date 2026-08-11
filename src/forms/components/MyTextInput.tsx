import { ErrorMessage, Field, useField } from "formik";

interface Props {
  name: string;
  label: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  placeholder?: string;
  [key: string]: any;
}

export const MyTextInput = ({
  name,
  label,
  type,
  placeholder,
  ...props
}: Props) => {
  const [field] = useField(name);
  return (
    <>
      <label htmlFor={props.id || name}>{label}</label>
      <Field
        type={type}
        id={name || props.id}
        placeholder={placeholder}
        {...field}
        name={name}
        {...props}
      />
      <ErrorMessage name={name} component="span" className="error-message" />
    </>
  );
};
