import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Stack,
  Button,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Container,
  InputLabel,
  Divider,
} from "@mui/material";

import MiniCalendariio from "../../Components/MiniCalendario/MiniCalendario";

const Licencia = () => {
  const [tipoLicencia, setTipoLicencia] = React.useState("");

  const handleChange = (event) => {
    setTipoLicencia(event.target.value);
  };

  return (
    <section
      style={{
        backgroundColor: "#fbfbfb",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          margin: "5px 20px",
          border: "0.5px solid #797979",
          borderRadius: "8px",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{ padding: "10px" }}
        >
          <Box sx={{ display: "flex", gap: "70px" }}>
            {/* Foto e nome do usuário */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{ width: 64, height: 64, marginRight: "10px" }}
                alt="Foto do usuário"
              />
              <Typography variant="h6">Maicon</Typography>
            </Box>
            {/* Título "Balance actual" y número de dias disponíbles */}
            <Box sx={{ display: "flex", alignItems: "center", margin: "20px" }}>
              <Typography variant="h6">Balance actual</Typography>
              <Typography variant="subtitle1" sx={{ marginLeft: "10px" }}>
                24 dias
              </Typography>
            </Box>
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
        </Stack>

        <Box
          component={"ul"}
          sx={{
            display: "flex",
            flexDirection: "column",
            borderTop: "0.5px solid #797979",
            padding: "20px 70px",
            gap: "30px",
            listStyleType: "none",
          }}
        >
          <Box component={"li"}>
            <Typography variant="subtitle2" color="text.secondary">
              TIPO DE LICENCIA
            </Typography>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="licencia-label">Licencia</InputLabel>
              <Select
                labelId="licencia-label"
                id="licencia-select"
                value={tipoLicencia}
                label="Licencia"
                onChange={handleChange}
              >
                <MenuItem value="vacaciones">Vacaciones</MenuItem>
                <MenuItem value="enfermedad">Enfermedad</MenuItem>
                <MenuItem value="examen">Examen</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            component={"li"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              padding: "0 7%",
              width: "fit-content",
            }}
          >
            <Box sx={{ display: "flex", gap: "40px" }}>
              <MiniCalendariio />
              <MiniCalendariio />
            </Box>
            <Box
              sx={{
                border: " 0.5px solid #797979",
                display: "flex",
                width: "fit-content",
                borderRadius: "10px",
                gap: "5px",
              }}
            >
              <Box
                sx={{ borderRight: " 0.5px solid #797979", padding: " 0 15px" }}
              >
                <Typography variant="subtitle2" color={"#06B80D"}>
                  8 días laborales
                </Typography>
              </Box>

              <Box sx={{ padding: " 0 15px" }}>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  24 días disponibles
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider variant="middle" />
          <Box
            component={"li"}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6">Descripcion</Typography>
            <TextField
              id="descripcion"
              label="Ingrese una descripción"
              variant="outlined"
              multiline
              rows={5}
            />
          </Box>

          <Box
            component={"li"}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              APROBACION A CARGO DE:
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Foto del responsable"
                src=""
                sx={{ width: 64, height: 64, mr: 1 }}
              />
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                MAICON ASSIS
              </Typography>
            </Box>
          </Box>
          {/* Botão de solicitação de aprovação */}
          <Box component={"li"} sx={{ alignSelf: "flex-end" }}>
            <Button variant="contained" color="primary" size="large">
              Solicitar Aprobacion
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Licencia;
