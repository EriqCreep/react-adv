import { ErrorMessage, Field, useField } from "formik";

interface Props {
  name: string;
  label: string;
  [key: string]: any;
}

export const MyCheckbox = ({
  name,
  label,
  ...props
}: Props) => {
  const [field] = useField(name);
  return (
    <>
      <label>
        <Field
          type="checkbox"
          id={props.id || name}
          {...field}
          name={name}
        />
        {label}
      </label>
      <ErrorMessage name={name} component="span" className="error-message" />
    </>
  );
};
