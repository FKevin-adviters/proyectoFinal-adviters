import React, { useContext, useState } from 'react';
import { ActionContext } from '../../Contexts/ContextProvider';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import LoginIcon from '@mui/icons-material/Login';
import './login.css';

function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress size={280} />
    </Box>
  );
}

function Login() {
  const { userLogIn } = useContext(ActionContext);
  const [isLoading, setIsLoading] = useState(false);

  function handleLoginClick() {
    // Cuando se hace clic en el botón "Iniciar sesión", cambia el estado isLoading a true
    setIsLoading(true);
    // Simula una operación asincrónica para demostrar el uso del componente de carga
    setTimeout(() => {
      // Después de 2 segundos, cambia el estado isLoading a false para mostrar los campos de inicio de sesión nuevamente
      setIsLoading(false);
      userLogIn();
    }, 1000);
  }

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
            label="Usuario"
            variant="outlined"
            margin="normal"
            className="input-field"
            fullWidth
            required
          />
          <TextField
            id="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            margin="normal"
            className="input-field"
            fullWidth
            required
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