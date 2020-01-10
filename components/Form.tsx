import React from "react";
import { Formik, FormikProps } from "formik";
import { Dialog, Heading, Pane, Switch, TextInput, Select } from "evergreen-ui";

export enum InputType {
  SWITCH = 1,
  TEXT_INPUT,
  SELECT
}

interface FormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  title: string;
  formsFields: {
    key: string;
    type: InputType;
    label: string;
    isDisabled?: (values: T) => boolean;
    props?: any;
    options?: { label: string; value: string | number }[];
  }[];
  open: boolean;
  toggle: () => void;
}

const Form = <T extends object>({
  initialValues,
  onSubmit,
  title,
  formsFields,
  open,
  toggle
}: FormProps<T> & { children?: React.ReactNode }) => {
  return (
    <Formik
      initialValues={initialValues}
      render={(props: FormikProps<T>) => {
        return (
          <Dialog
            title={title}
            isShown={open}
            onCloseComplete={toggle}
            onConfirm={close => {
              props.submitForm();
              close();
            }}
            onCancel={close => {
              props.resetForm();
              close();
            }}
          >
            <>
              {formsFields.map(
                (
                  { type, key, label, isDisabled, props: _props, options },
                  i
                ) => {
                  let FormField, select;
                  if (type === InputType.TEXT_INPUT) FormField = TextInput;
                  else if (type === InputType.SWITCH) FormField = Switch;
                  else if (type === InputType.SELECT)
                    select = (
                      <Select
                        value={props.values[key]}
                        onChange={props.handleChange}
                        name={key}
                        defaultValue={options[0].value}
                      >
                        {options.map(({ label, value }) => (
                          <option
                            key={value}
                            value={value}
                            selected={props.values[key] === value}
                          >
                            {label}
                          </option>
                        ))}
                      </Select>
                    );

                  const _isDisabled = isDisabled
                    ? isDisabled(props.values)
                    : undefined;

                  return (
                    <Pane
                      display={"flex"}
                      alignItems="center"
                      flexDirection={"row"}
                      paddingY={10}
                      key={i}
                      justifyContent={"space-between"}
                      {..._props}
                    >
                      <Heading
                        flex={1}
                        size={400}
                        opacity={_isDisabled ? 0.4 : 1}
                        textTransform={"capitalize"}
                      >
                        {label}
                      </Heading>
                      {FormField && (
                        <FormField
                          value={props.values[key]}
                          checked={props.values[key]}
                          onChange={props.handleChange}
                          name={key}
                          disabled={_isDisabled}
                        />
                      )}

                      {select}
                    </Pane>
                  );
                }
              )}
            </>
          </Dialog>
        );
      }}
      onSubmit={values => {
        onSubmit(values);
      }}
    />
  );
};

export default Form;
