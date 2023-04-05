import { Box } from "@mui/material";
import React from "react";
import UsuarioFields from "../../Components/UsuarioFields/UsuarioFields";

const Perfil = () => {
  return (
    <Box
      component={"section"}
      sx={{ backgroundColor: "#fbfbfb", minHeight: "90vh" }}
    >
      <UsuarioFields />
    </Box>
  );
};

export default Perfil;
