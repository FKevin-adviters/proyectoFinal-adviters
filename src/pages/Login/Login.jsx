import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import LoginIcon from "@mui/icons-material/Login";
import "./login.css";
import { useLogin } from "../../Hooks/useLogin";

function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={280} />
    </Box>
  );
}

function Login() {
  const [user, setUser] = useState({});
  const { isLoading, submitLogin, isError } = useLogin();

  function handleLoginClick() {
    submitLogin(user);
  }

  const handleChange = (e) => {
    setUser(() => {
      return { ...user, [e.target.name]: e.target.value };
    });
    console.log(user);
  };

  return (
    <section className="login-section">
      {/* Si isLoading es true, muestra solo el componente CircularIndeterminate */}
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        // De lo contrario, muestra los campos de inicio de sesión
        <Box className="login-container">
          <TextField
            id="email"
            name="email"
            label="Usuario"
            variant="outlined"
            margin="normal"
            className="input-field"
            fullWidth
            required
            onChange={handleChange}
          />
          <TextField
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            margin="normal"
            className="input-field"
            fullWidth
            required
            onChange={handleChange}
          />
          <Button
            variant="contained"
            onClick={handleLoginClick}
            endIcon={<LoginIcon />}
            className="login-button"
          >
            Iniciar sesión
          </Button>
        </Box>
      )}
    </section>
  );
}

export default Login;
