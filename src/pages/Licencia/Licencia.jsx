import React from "react";
import { Box, Avatar, Typography, Stack, Button, FormControl, Select, MenuItem } from "@mui/material";
import MiniCalendariio from "../../Components/MiniCalendario/MiniCalendario";

const Licencia = () => {
  const [tipoLicencia, setTipoLicencia] = React.useState('');

  const handleChange = (event) => {
    setTipoLicencia(event.target.value);
  };

  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-around">
        <Box sx={{
          display: "flex", border: '0.5px solid black', width: "90%", justifyContent: "space-between",
          alignItems: "center", paddingLeft: '5px', paddingRight: '10px'
        }}>
          {/* Foto e nome do usuário */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{ width: 64, height: 64, marginRight: "10px" }}
              alt="Foto do usuário" />
            <Typography variant="h6">Maicon</Typography>
          </Box>
          {/* Título "Balance actual" y número de dias disponíbles */}
          <Box sx={{ display: "flex", alignItems: "center", margin: "20px" }}>
            <Typography variant="h6">Balance actual</Typography>
            <Typography variant="subtitle1" sx={{ marginLeft: "10px" }}>
              24 dias
            </Typography>
          </Box>

          {/* Título "Estado" e status da solicitação */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

            }}
          >
            <Typography variant="h6">Estado</Typography>
            <Typography
              variant="subtitle1"
              sx={{
                background: "#05CB3C",
                borderRadius: "16px",
                color: "white",
                width: "164px",
                height: "19px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {"AUN NO ENVIADO"}
            </Typography>
          </Box>
        </Box>
      </Stack>

      <Box sx={{ display: "flex", border: '0.5px solid black', width: "90%", justifyContent: "space-between",
          alignItems: "center", paddingLeft: '5px', paddingRight: '10px'}}>
        <Stack direction="column" alignItems="flex-start" marginTop="20px">
          <Typography variant="subtitle1" sx={{ fontFamily: "Roboto", fontSize: "14px", color: "#797979" }}>
            TIPO DE LICENCIA
          </Typography>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: '5px', paddingRight: '10px', marginBottom: '20px' }}>
            <FormControl sx={{ minWidth: 120 }}>
              <Select value={tipoLicencia} onChange={handleChange}>
                <MenuItem value="licencia" disabled selected>Licencia</MenuItem>
                <MenuItem value="vacaciones">Vacaciones</MenuItem>
                <MenuItem value="enfermedad">Enfermedad</MenuItem>
                <MenuItem value="examen">Examen</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>

        <Stack direction="row" spacing={0} justifyContent="space-evenly">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="subtitle1">Desde</Typography>
            <MiniCalendariio />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="subtitle1">Hasta</Typography>
            <MiniCalendariio />
          </Box>
        </Stack>
      </Box>

      {/* Botão de solicitação de aprovação */}
      <Box sx={{ position: "absolute", bottom: "20px", right: "20px" }}>
        <Button variant="contained" color="primary" size="large">
          Solicitar Aprobacion
        </Button>
      </Box>
    </>
  );
};

export default Licencia;