import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const SelectFieldGenerico = ({
  valores,
  name,
  state,
  label,
  setter,
  defaultValue,
  setUserSelectedById,
  createdMode,
}) => {
  const [selected, setSelected] = useState();

  const handleChange = (e) => {
    setSelected(e.target.value);
    if (!createdMode) {
      setUserSelectedById(e.target.value);
    }

    setter(() => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={`${name}-select`}
        value={defaultValue || selected}
        label={label}
        name={name}
        onChange={handleChange}
      >
        <MenuItem disabled>Seleccionar {label}</MenuItem>
        {valores.map((valor) => (
          <MenuItem value={valor.id} key={valor.id}>
            {valor.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFieldGenerico;
