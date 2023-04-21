import { TextField } from "@mui/material";
import React from "react";
import { convertDates } from "../../Utils/convertDates";

const InputGenerico = ({
  id,
  label,
  type,
  name,
  setter,
  defaultValue,
  required,
}) => {
  const handleChange = (event) => {
    setter((old) => {
      return {
        ...old,
        [event.target.name]: event.target.value,
      };
    });
  };

  const checkDefaultValue = () => {
    if (type == "date" && defaultValue) {
      return convertDates(defaultValue);
    } else if (defaultValue) {
      return defaultValue;
    }
  };

  return (
    <>
      {required ? (
        <TextField
          id={id}
          label={label}
          type={type}
          name={name}
          onChange={handleChange}
          defaultValue={checkDefaultValue()}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
      ) : (
        <TextField
          id={id}
          label={label}
          type={type}
          name={name}
          onChange={handleChange}
          defaultValue={checkDefaultValue()}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    </>
  );
};

export default InputGenerico;
