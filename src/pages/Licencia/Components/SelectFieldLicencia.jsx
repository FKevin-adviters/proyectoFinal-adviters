import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const SelectFieldLicencia = ({ valores, name, setLicenciaData, label }) => {
  const [selected, setSelected] = useState(valores[0]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setLicenciaData((old) => {
      return { ...old, [e.target.name]: e.target.value };
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
