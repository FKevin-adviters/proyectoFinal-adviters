import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      component={"section"}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
      }}
    >
      <Typography component={"h1"}>
        Esta ruta es inaccesible o inexistente, aquí puede redireccionarse al
        inicio:
      </Typography>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button variant="outlined">Ir al inicio</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
