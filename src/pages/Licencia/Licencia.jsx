import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Stack,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import CalendarioButtons from "./Components/CalendarioButtons";
import SelectFieldLicencia from "./Components/SelectFieldLicencia";

const initialState = {
  user: "",
  diasDisp: 24,
  tipoLicencia: "",
  supervisor: "Juan Pablo",
  description: "",
};

const usuarios = ["Maicon", "Ezequiel", "Kevin"];

const tipoLicencias = ["Vacaciones", "Enfermedad", "Examen"];

const Licencia = () => {
  const [licenciaData, setLicenciaData] = useState(initialState);

  const handleSubmit = () => {
    console.log(licenciaData);
  };

  const handleDesc = (e) => {
    setLicenciaData(() => ({
      ...licenciaData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section
        style={{
          backgroundColor: "#fbfbfb",
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "65vw",
            margin: "5px 10px",
            border: "0.5px solid #797979",
            borderRadius: "8px",
          }}
          onSubmit={handleSubmit}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            sx={{ padding: "10px" }}
          >
            <SelectFieldLicencia
              valores={usuarios}
              label={"Usuario"}
              name={"user"}
              setLicenciaData={setLicenciaData}
              licenciaData={licenciaData}
            />

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
                  padding: "0 15px",
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

              <SelectFieldLicencia
                valores={tipoLicencias}
                label={"Licencia"}
                name={"tipoLicencia"}
                setLicenciaData={setLicenciaData}
                licenciaData={licenciaData}
              />
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
              {/* calendario */}
              <CalendarioButtons setLicenciaData={setLicenciaData} />

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
                  sx={{
                    borderRight: " 0.5px solid #797979",
                    padding: " 0 15px",
                  }}
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
                name="description"
                onChange={handleDesc}
                multiline
                rows={5}
              />
            </Box>

            <Box
              component={"li"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                APROBACION A CARGO DE:
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Avatar sx={{ width: "70px", height: "70px" }}>JP</Avatar>
                <Typography variant="h5" fontWeight={"#FF8585"} color={"red"}>
                  Juan Pablo
                </Typography>
              </Box>
            </Box>
            {/* Botão de solicitação de aprovação */}
            <Box component={"li"} sx={{ alignSelf: "flex-end" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit}
              >
                Solicitar Aprobacion
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid grey",
            minHeight: "100vh",
            minWidth: "30vw",
            borderRadius: "10px",
            margin: "5px 10px",
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid grey",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                alignSelf: "center",
              }}
            >
              Detalle de Vacaciones
            </Typography>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Licencia;
