import { Box, Typography } from "@mui/material";
import React from "react";
import UsuarioFields from "../../../Components/UsuarioFields/UsuarioFields";
import { useParams } from "react-router-dom";
import "./adminUsuariosEdit.css";

const AdminUsuariosEdit = () => {
  const { editUser } = useUsuario();
  const { idUser } = useParams();

  return (
    <Box className="box">
      <Typography variant="h4" color={"red"} padding={"20px"}>
        Editar usuario
      </Typography>
      <UsuarioFields idUser={idUser} fetchFn={editUser} />
    </Box>
  );
};

export default AdminUsuariosEdit;
