import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Switch,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InputGenerico from "./InputGenerico";
import { Column1, Column2, Column3 } from "../../constants/constantes";
import SelectFieldGenerico from "../../pages/Licencia/Components/SelectFieldGenerico";
import { toast } from "react-toastify";

const supervisores = ["Lautaro", "Luis", "Eric"];
const imageMimeType = /image\/(png|jpg|jpeg)/i;

const UsuarioFields = ({ defaultValues, setter, state, createdMode }) => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      toast.error("El tipo de imagen ingresado no es válido.");
      return;
    }
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          console.log(result);
          setFileDataURL(result);
          setter(() => {
            return { ...state, profile_picture: result };
          });
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

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
            {fileDataURL && (
              <img alt="profile image" src={fileDataURL} width={150} />
            )}
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
                onChange={handleChange}
                onClick={(e) => {
                  e.target.value = null;
                }}
              />
            </Button>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <SelectFieldGenerico
                valores={supervisores}
                name={"supervisor"}
                label={"Bajo supervision de:"}
                setter={setter}
                state={state}
              />
            </FormControl>
            {Column1.map((input) => {
              return (
                <InputGenerico
                  id={input.id}
                  label={input.label}
                  type={input.type}
                  name={input.name}
                  setter={setter}
                  defaultValue={
                    defaultValues && !createdMode
                      ? defaultValues[input.backName]
                      : null
                  }
                />
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
                  setter={setter}
                  defaultValue={
                    defaultValues && !createdMode
                      ? defaultValues[input.backName]
                      : null
                  }
                />
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
                  name={input.name}
                  setter={setter}
                  defaultValue={
                    defaultValues && !createdMode
                      ? input.backName !== "password" &&
                        defaultValues[input.backName]
                      : null
                  }
                />
              );
            })}
            {defaultValues?.roles[0] === "SUPERVISOR" && (
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked={
                      defaultValues?.roles[0] == "USUARIO" ? false : true
                    }
                  />
                }
                name="roles"
                label="Administrador"
              />
            )}
          </Box>
        </Box>
        <Button
          sx={{ alignSelf: "flex-end" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Guardar
        </Button>
      </Box>
    </>
  );
};

export default UsuarioFields;
