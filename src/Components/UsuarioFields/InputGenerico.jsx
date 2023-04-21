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
    let nameInput = event.target.name;
    let valueInput = event.target.value;
    if (nameInput === ("dni" || "cuil" || "phone") && valueInput != null) {
      valueInput = event.target.name.toString();
    }
    setter((old) => {
      return {
        ...old,
        [nameInput]: valueInput,
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
