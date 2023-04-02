import { Button, Container } from "@mui/material";
import React, { useContext } from "react";
import { ActionContext } from "../../Contexts/ContextProvider";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const { userLogIn } = useContext(ActionContext);

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
      <Button
        variant="contained"
        onClick={() => userLogIn()}
        endIcon={<LoginIcon />}
      >
        Ingresar
      </Button>
    </Container>
  );
};

export default Login;
