import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import React, { useContext, useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InputGenerico from "./InputGenerico";
import { Column1, Column2, Column3 } from "../../constants/constantes";
import SelectFieldLicencia from "../../pages/Licencia/Components/SelectFieldLicencia";
import { ActionContext } from "../../Contexts/ContextProvider";

const supervisores = ["Lautaro", "Luis", "Eric"];
// constantes de los inputs

const UsuarioFields = () => {
  const { user } = useContext(ActionContext);
  // Crear un componente para los Inputs, que se le pase el handleChange,
  // el type, name, label y mapear un obj con los datos.

  const [userInfo, setUserInfo] = useState({});
  const userData = {
    name: "jorge",
  };

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
              <SelectFieldLicencia
                valores={supervisores}
                name={"supervisor"}
                label={"Bajo supervision de:"}
                setLicenciaData={setUserInfo}
              />
            </FormControl>
            {Column1.map((input) => {
              return (
                <InputGenerico
                  id={input.id}
                  label={input.label}
                  type={input.type}
                  defaultValue={userData[input.backName]}
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
            {user.data?.roles[0] === "SUPERVISOR" && (
              <FormControlLabel
                control={<Switch defaultChecked disabled />}
                label="Administrador"
              />
            )}
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
