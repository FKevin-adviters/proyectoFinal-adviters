import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import UsuarioFields from "../../../Components/UsuarioFields/UsuarioFields";
import { useUsuario } from "../../../Hooks/useUsuario";
import "./adminUsuariosCreate.css";
import { toast } from "react-toastify";

const AdminUsuariosCreate = () => {
  const { createUser } = useUsuario();
  const [userInfo, setUserInfo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reportValidity();

    console.log(userInfo);
    createUser(userInfo)
      .then(() => {
        toast.success("Se ha creado el usuario", {
          toastId: "toast-user-created",
        });
        e.target.reset();
      })
      .catch((err) => {
        e.target.reset();
        console.log(err);
        toast.error("No ha sido posible crear el usuario, intente más tarde.", {
          toastId: "toast-user-create-error",
        });
      });
  };

  return (
    <Box className="box">
      <Typography variant="h4" color={"red"} padding={"20px"}>
        Crear usuario
      </Typography>
      <UsuarioFields
        setter={setUserInfo}
        state={userInfo}
        createdMode={true}
        fetchFn={createUser}
        handleSubmitForm={handleSubmit}
      />
    </Box>
  );
};

export default AdminUsuariosCreate;
