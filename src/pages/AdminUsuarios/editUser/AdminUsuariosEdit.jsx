import { Box, Typography } from "@mui/material";
import React from "react";
import UsuarioFields from "../../../Components/UsuarioFields/UsuarioFields";
import { useParams } from "react-router-dom";

const AdminUsuariosEdit = ({ createMode, editMode }) => {
  const { idUser } = useParams();
  console.log(idUser);
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
        Editar usuario
      </Typography>
      <UsuarioFields />
    </Box>
  );
};

export default AdminUsuariosEdit;
