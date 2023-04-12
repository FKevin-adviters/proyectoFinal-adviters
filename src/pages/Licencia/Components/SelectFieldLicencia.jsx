import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const SelectFieldLicencia = ({
  valores,
  name,
  licenciaData,
  label,
  setLicenciaData,
}) => {
  const [selected, setSelected] = useState();

  const handleChange = (e) => {
    setSelected(e.target.value);
    setLicenciaData(() => {
      return { ...licenciaData, [e.target.name]: e.target.value };
    });
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={`${name}-select`}
        value={selected}
        label={label}
        name={name}
        onChange={handleChange}
      >
        <MenuItem disabled>Seleccionar {label}</MenuItem>
        {valores.map((valor) => (
          <MenuItem value={valor} key={valor}>
            {valor}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFieldLicencia;
