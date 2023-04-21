import {
  Avatar,
  Box,
  Button,
  CardMedia,
  FormControl,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InputGenerico from "./InputGenerico";
import { Column1, Column2, Column3 } from "../../constants/constantes";
import SelectFieldGenerico from "../../pages/Licencia/Components/SelectFieldGenerico";
import { toast } from "react-toastify";
import "./usuarioFields.css";
import { useUsuario } from "../../Hooks/useUsuario";
import { ActionContext } from "../../Contexts/ContextProvider";
import { getUserById } from "../../Services/usuarioServices";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const UsuarioFields = ({
  defaultValues,
  setter,
  state,
  createdMode,
  handleSubmitForm,
}) => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [supervisor, setSupervisor] = useState();
  const { getUsersByRol, data } = useUsuario();
  const { user } = useContext(ActionContext);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      toast.error("El tipo de imagen ingresado no es válido.");
      return;
    }
    setFile(file);
  };

  const handleSwitch = (e) => {
    setter(() => {
      return {
        ...state,
        [e.target.name]: [e.target.value ? "SUPERVISOR" : "USUARIO"],
      };
    });
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

  useEffect(() => {
    if (createdMode) {
      const fetchData = () => {
        getUsersByRol().catch((err) => {
          console.log(err);
          toast.error("No se han podido cargar los supervisores", {
            toastId: "toast-users-error",
          });
        });
      };
      return fetchData();
    } else {
      if (
        user.data?.profile_picture != null &&
        user.data?.profile_picture?.length > 500
      ) {
        setFileDataURL(user.data?.profile_picture);
      }
      if (user.data?.supervisorId != null)
        getUserById(user.data?.supervisorId)
          .then((res) => {
            setSupervisor(res);
          })
          .catch(() => {
            setSupervisor(null);
          });
    }
  }, []);

  return (
    <Box id="seccionPerfil">
      <Box
        component={"form"}
        noValidate
        autoComplete="off"
        className="form-box"
        onSubmit={handleSubmitForm}
      >
        <Box className="box-wrapper">
          <Box component={"div"} className="box-content">
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
            {data && createdMode && data?.supervisores ? (
              <FormControl variant="standard" className="form-control">
                <SelectFieldGenerico
                  valores={data && data?.supervisores ? data.supervisores : ""}
                  name={"supervisorId"}
                  label={"Bajo supervision de:"}
                  setter={setter}
                  state={state}
                />
              </FormControl>
            ) : (
              ""
            )}
            {supervisor && !createdMode ? (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                title="Supervisor"
              >
                {supervisor?.profile_picture != null &&
                supervisor?.profile_picture.length > 500 ? (
                  <>
                    <CardMedia
                      component="img"
                      src={supervisor.profile_picture}
                      sx={{
                        width: "40px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography
                      variant="h5"
                      fontWeight={"#FF8585"}
                      color={"red"}
                    >
                      {`${supervisor?.name} ${supervisor?.lastname}`}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Avatar sx={{ width: "70px", height: "70px" }}>
                      {supervisor?.name[0].toUpperCase() +
                        supervisor?.lastname[0].toUpperCase()}
                    </Avatar>
                    <Typography
                      variant="h5"
                      fontWeight={"#FF8585"}
                      color={"red"}
                    >
                      {`${supervisor?.name} ${supervisor?.lastname}`}
                    </Typography>
                  </>
                )}
              </Box>
            ) : (
              ""
            )}
            {Column1.map((input) => {
              return (
                <InputGenerico
                  id={input.id}
                  label={input.label}
                  type={input.type}
                  name={input.name}
                  setter={setter}
                  required={input.required ? true : false}
                  defaultValue={
                    defaultValues && !createdMode
                      ? defaultValues[input.backName]
                      : null
                  }
                />
              );
            })}
          </Box>
          <Box component={"div"} className="box-content">
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
                  required={input.required ? true : false}
                />
              );
            })}
          </Box>
          <Box component={"div"} className="box-content">
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
                  required={input.required ? true : false}
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
            {user?.data?.roles[0] == "SUPERVISOR" && !defaultValues ? (
              <FormControlLabel
                control={<Switch name="roles" onChange={handleSwitch} />}
                name="roles"
                label="Administrador"
              />
            ) : (
              ""
            )}
          </Box>
        </Box>
        <Button className="button-flex-end" variant="contained" type="submit">
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default UsuarioFields;
