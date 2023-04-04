import React, { useContext } from "react";
import { ActionContext } from "../../Contexts/ContextProvider";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import LoginIcon from "@mui/icons-material/Login";
import "./login.css";

const Login = () => {
  const { userLogIn } = useContext(ActionContext);

  return (
    <section className="login-section">
      <Box className="login-container">
        <TextField
          id="email"
          label="Usuario"
          variant="outlined"
          margin="normal"
          className="input-field"
          fullWidth
          required
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          className="input-field"
          fullWidth
          required
        />
        <Button
          variant="contained"
          onClick={() => userLogIn()}
          endIcon={<LoginIcon />}
          className="login-button"
        >
          Iniciar
        </Button>
      </Box>
    </section>
  );
};

export default Login;
