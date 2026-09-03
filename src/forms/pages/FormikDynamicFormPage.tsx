import { Form, Formik } from "formik";
import { AnyActionArg } from "react";
import * as Yup from "yup";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";

export enum ValidationTypes {
  Required = "required",
  MinLength = "minLength",
  MaxLength = "maxLength",
  Email = "email",
}

export interface FormDynamicType {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  options?: { label: string; value: string }[];
  validations?: Array<{
    type: ValidationTypes | string;
    minLength?: number;
    maxLength?: number;
  }>;
}

export interface anyObject {
  [key: string]: any;
}

export const FormikDynamicFormPage = () => {
  const initialValues: anyObject = {};
  const validationFields: anyObject = {};

  formJson.forEach((field: FormDynamicType) => {
    initialValues[field.name] = field.value;
    if (field.validations) {
      field.validations.forEach((validation) => {
        if (validation.type === ValidationTypes.Required) {
          validationFields[field.name] = Yup.string().required(
            `${field.label} is required`,
          );
        }
        if (validation.type === ValidationTypes.MinLength && validation.minLength) {
          validationFields[field.name] = Yup.string().min(
            validation.minLength,
            `${field.label} must be at least ${validation.minLength} characters`,
          );
        }
        if (validation.type === ValidationTypes.MaxLength && validation.maxLength) {
          validationFields[field.name] = Yup.string().max(
            validation.maxLength,
            `${field.label} must be at most ${validation.maxLength} characters`,
          );
        }
        if (validation.type === ValidationTypes.Email) {
          validationFields[field.name] = Yup.string().email(
            `${field.label} must be a valid email`,
          );
        }
      });
    }
  });

  const validationSchema = Yup.object({ ...validationFields });

  const handleSubmit = (values: AnyActionArg) => {
    console.log("Form Data:", values);
  };

  return (
    <div>
      <h1>Formik Dynamic Form Page</h1>
      <hr />
      <Formik
        initialValues={initialValues as unknown as AnyActionArg}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            {formJson.map((field: FormDynamicType) => {
              switch (field.type) {
                case "input-text":
                  return (
                    <MyTextInput
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      value={field.value}
                    />
                  );
                case "input-email":
                  return (
                    <MyTextInput
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      value={field.value}
                      type="email"
                    />
                  );
                case "input-password":
                  return (
                    <MyTextInput
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      value={field.value}
                      type="password"
                    />
                  );
                case "select":
                  return (
                    <MySelect
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      value={field.value}
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        );
                      })}
                    </MySelect>
                  );
                default:
                  return <div>Invalid Type</div>;
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
