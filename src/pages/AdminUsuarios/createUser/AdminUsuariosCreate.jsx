import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import UsuarioFields from "../../../Components/UsuarioFields/UsuarioFields";
import { useUsuario } from "../../../Hooks/useUsuario";

const AdminUsuariosCreate = () => {
  const { createUser } = useUsuario();
  const [userInfo, setUserInfo] = useState({});

  return (
    <Box
      sx={{
        border: "1px solid grey",
        width: "65vw",
        minHeight: "100vh",
        padding: "10px",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
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
