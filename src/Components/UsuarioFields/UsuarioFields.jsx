import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InputGenerico from "./InputGenerico";
import { DateField } from "@mui/x-date-pickers";

const UsuarioFields = () => {
  const [num, setNum] = useState(10);
  // Crear un componente para los Inputs, que se le pase el handleChange,
  // el type, name, label y mapear un obj con los datos.

  const [userInfo, setUserInfo] = useState();
  const handleSelect = (e) => {
    setNum(e.target.value);
  };

  const Column1 = [
    { id: "outlined-dni-number", label: "DNI", type: "number", name: "dni" },
    {
      id: "outlined-correo-email",
      label: "Correo electronico",
      type: "email",
      name: "email",
    },
    { id: "outlined-calle-text", label: "Calle", type: "text", name: "calle" },
    { id: "outlined-torre-text", label: "Torre", type: "text", name: "torre" },
    {
      id: "outlined-localidad-text",
      label: "Localidad",
      type: "text",
      name: "localidad",
    },
    {
      id: "outlined-diasVacaciones-number",
      label: "Dias vacaciones",
      type: "number",
      name: "vacaciones",
    },
  ];
  const Column2 = [
    {
      id: "outlined-nombre-text",
      label: "Nombre",
      type: "text",
      name: "nombre",
    },
    {
      id: "outlined-apellido-text",
      label: "Apellido",
      type: "text",
      name: "apellido",
    },
    {
      id: "outlined-fechaNacimiento-number",
      label: "Fecha de nacimiento",
      type: "number",
      name: "fnacimiento",
    },
    { id: "outlined-cuil-text", label: "Cuil", type: "text", name: "cuil" },
    {
      id: "outlined-telefono-text",
      label: "Telefono",
      type: "number",
      name: "telefono",
    },
    {
      id: "outlined-calleNumber-number",
      label: "Altura",
      type: "number",
      name: "altura",
    },
    { id: "outlined-piso-number", label: "Piso", type: "number", name: "piso" },
    {
      id: "outlined-provincia-text",
      label: "Provincia",
      type: "text",
      name: "provincia",
    },
  ];
  const Column3 = [
    {
      id: "outlined-passwordNuevo-pass",
      label: "Password nuevo",
      type: "password",
      name: "newpass",
    },
    {
      id: "outlined-passwordRepetir-pass",
      label: "Repetir password",
      type: "password",
      name: "repeatpass",
    },
    {
      id: "outlined-fechaIngreso-number",
      label: "Fecha de ingreso",
      type: "number",
      name: "fingreso",
    },
    {
      id: "outlined-codigoPostal-number",
      label: "Codigo postal",
      type: "number",
      name: "cp",
    },
    {
      id: "outlined-departamento-text",
      label: "Departamento",
      type: "text",
      name: "depto",
    },
    { id: "outlined-pais-text", label: "Pais", type: "text", name: "pais" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <>
      <Box
        component={"form"}
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "20px",
              gap: "20px",
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
            {Column1.map((input) => {
              return (
                <InputGenerico
                  id={input.id}
                  label={input.label}
                  type={input.type}
                ></InputGenerico>
              );
            })}
          </Box>
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "20px",
              gap: "20px",
            }}
          >
            {Column2.map((input) => {
              return (
                <InputGenerico
                  id={input.id}
                  label={input.label}
                  type={input.type}
                  name={input.name}
                  setUserInfo={setUserInfo}
                ></InputGenerico>
              );
            })}
            {/* {
          user.rol.administrator && (<FormControlLabel control={<Switch defaultChecked />} label="Administrador"/>)
        } */}
          </Box>
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "20px",
              gap: "20px",
            }}
          >
            {Column3.map((input) => {
              return (
                <InputGenerico
                  id={input.id}
                  label={input.label}
                  type={input.type}
                ></InputGenerico>
              );
            })}
          </Box>
        </Box>
        <Button sx={{ alignSelf: "flex-end" }} variant="contained">
          Guardar
        </Button>
      </Box>
    </>
  );
};

export default UsuarioFields;
