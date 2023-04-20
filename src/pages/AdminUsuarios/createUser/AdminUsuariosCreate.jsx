import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import UsuarioFields from "../../../Components/UsuarioFields/UsuarioFields";
import { useUsuario } from "../../../Hooks/useUsuario";
import "./adminUsuariosCreate.css";

const AdminUsuariosCreate = () => {
  const { createUser } = useUsuario();
  const [userInfo, setUserInfo] = useState({});

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
      />
    </Box>
  );
};

export default AdminUsuariosCreate;
