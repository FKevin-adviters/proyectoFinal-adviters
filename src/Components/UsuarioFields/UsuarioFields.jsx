import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { DateField } from "@mui/x-date-pickers";

const UsuarioFields = () => {
  const [num, setNum] = useState(10);

  const handleSelect = (e) => {
    setNum(e.target.value);
  };

  return (
    <Box
      component={"form"}
      noValidate
      autoComplete="off"
      sx={{ display: "flex" }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Button
          variant="contained"
          component="label"
          endIcon={<CameraAltIcon />}
        >
          Cargar imagen
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(event) => {
              let res = event.target.files[0].type;
            }}
            onClick={(e) => {
              e.target.value = null;
            }}
          />
        </Button>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Bajo supervisión de:
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Bajo supervisión de:"
            value={num}
            onChange={(e) => handleSelect(e)}
          >
            <MenuItem value={10}>Roberto</MenuItem>
            <MenuItem value={20}>Juan</MenuItem>
            <MenuItem value={30}>Pablito</MenuItem>
          </Select>
        </FormControl>
        <TextField id="outlined-dni-number" label="DNI" type="number" />
        <TextField
          id="outlined-correo-email"
          label="Correo electronico"
          type="email"
        />
        <TextField id="outlined-calle-text" label="Calle" type="text" />
        <TextField id="outlined-torre-text" label="Torre" type="text" />
        <TextField id="outlined-localidad-text" label="Localidad" type="text" />
        <TextField
          id="outlined-diasVacaciones-number"
          label="Dias Vacaciones"
          type="number"
        />
      </Box>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <TextField id="outlined-nombre-text" label="Nombre" type="text" />
        <TextField id="outlined-apellido-text" label="Apellido" type="text" />

        <DateField label="Fecha Nacimiento" />
      </Box>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      ></Box>
    </Box>
  );
};

export default UsuarioFields;
