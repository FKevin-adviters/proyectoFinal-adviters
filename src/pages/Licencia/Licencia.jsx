import React from "react";
import { Box, Avatar, Typography, Stack, Button } from "@mui/material";

const Licencia = () => {
  // obter a imagem do usuário da base de dados
  // const userImage = ...

  // obter o número de dias disponíveis para solicitar da base de dados
  // const daysLeft = ...

  // obter o estado da solicitação da base de dados
  // const requestStatus = ...

  return (
    <Stack direction="row" spacing={2} justifyContent="space-around">
      <Box sx={{ display: "flex" }}>
        {/* Foto e nome do usuário */}
        <Box sx={{ display: "flex", alignItems: "center", margin: "20px" }}>
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
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h6">Estado</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ background: "#05CB3C", borderRadius: "16px", color: "white" }}>{"AUN NO ENVIADO"}</Typography>
        </Box>
      </Box>
      {/* Botão de solicitação de aprovação */}
      <Box sx={{ position: "absolute", bottom: "20px", right: "20px" }}>
        <Button variant="contained" color="primary" size="large">
          Solicitar Aprobacion
        </Button>
      </Box>
    </Stack>
  );
};

export default Licencia;