import { ErrorMessage, Field, useField } from "formik";
import { ReactNode } from "react";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  children?: ReactNode;
  [key: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field as="select"  {...field} {...props}></Field>
      <ErrorMessage name={props.name} component="span" className="error-message" />
    </>
  );
};
