import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Stack,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import "../Licencia/licencia.css";
import "react-datepicker/dist/react-datepicker.css";
import CalendarioButtons from "./Components/CalendarioButtons";
import SelectFieldGenerico from "./Components/SelectFieldGenerico";
import { LicenciasDetalles } from "./Components/LicenciasDetalles";
import { AdjuntarArchivo } from "./Components/AdjuntarArchivo";
import { daysBetweenDates, getDaysWorkable } from "../../Utils/convertDates";
import { ActionContext } from "../../Contexts/ContextProvider";
import { toast } from "react-toastify";
import { useUsuario } from "../../Hooks/useUsuario";
import { useNavigate } from "react-router-dom";
import { createLicencia } from "../../Services/licenciasServices";

let initialState = {
  licenseUser: "",
  tipoLicencia: "",
  licenseSupervisor: "",
  description: "",
};

const usuarios = ["Maicon", "Ezequiel", "Kevin"];

const tipoLicencias = [
  { name: "Tramites", id: 0 },
  { name: "Vacaciones", id: 1 },
  { name: "Dia de Estudio", id: 2 },
  { name: "Licencia Medica", id: 3 },
];

const Licencia = ({ dashboardLic }) => {
  const { user } = useContext(ActionContext);
  const { getUsers, data } = useUsuario();
  const [licenciaData, setLicenciaData] = useState(initialState);
  const redirect = useNavigate();

  const handleSubmit = async () => {
    console.log(getDaysWorkable(licenciaData.startDate, licenciaData.endDate));
    if (
      user.data.available_days <
      daysBetweenDates(licenciaData.endDate, licenciaData.startDate)
    ) {
      return toast.info(
        "Por favor, ingrese un rango de días equivalente o menor a sus días disponibles."
      );
    }

    await createLicencia(licenciaData)
      .then(() => {
        toast.success("Se ha logrado crear la licencia");
        redirect("/");
      })
      .catch(() => {
        toast.error("No se ha logrado crear la licencia");
      })
      .finally(setLicenciaData(initialState));
  };

  const handleDesc = (e) => {
    setLicenciaData(() => ({
      ...licenciaData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (data) {
      data?.map((user) => {
        if (user.id == licenciaData?.licenseUser && user.supervisor != null) {
          setLicenciaData((old) => {
            return { ...old, licenseSupervisor: user.id };
          });
        }
      });
    }
  }, [licenciaData.licenseUser]);

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
          id="licencias"
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
            {data && (
              <SelectFieldGenerico
                valores={data}
                label={"Usuario"}
                name={"licenseUser"}
                setter={setLicenciaData}
                state={licenciaData}
              />
            )}

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
            <Box component={"li"} sx={{ display: "flex", gap: "100px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "fit-content",
                }}
              >
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ display: "inline" }}
                >
                  TIPO DE LICENCIA
                </Typography>
                <SelectFieldGenerico
                  valores={tipoLicencias}
                  label={"Licencia"}
                  name={"tipoLicencia"}
                  setter={setLicenciaData}
                  state={licenciaData}
                />
              </Box>
              <AdjuntarArchivo />
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
                    {licenciaData.startDate &&
                      licenciaData.endDate &&
                      daysBetweenDates(
                        licenciaData.endDate,
                        licenciaData.startDate
                      )}{" "}
                    días laborales
                  </Typography>
                </Box>

                <Box sx={{ padding: " 0 15px" }}>
                  <Typography variant="subtitle2" color={"text.secondary"}>
                    {user.data.available_days ? user.data.available_days : "?"}{" "}
                    días disponibles
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
              {licenciaData?.licenseUser && data
                ? data.map((user) => {
                    if (
                      user.id == licenciaData?.licenseUser &&
                      user.supervisor != null
                    ) {
                      return (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Avatar sx={{ width: "70px", height: "70px" }}>
                            {user.supervisor.name[0].toUpperCase() +
                              user.supervisor.lastname[0].toUpperCase()}
                          </Avatar>
                          <Typography
                            variant="h5"
                            fontWeight={"#FF8585"}
                            color={"red"}
                          >
                            {`${user.supervisor.name} ${user.supervisor.lastname}`}
                          </Typography>
                        </Box>
                      );
                    }
                  })
                : ""}
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
        {!dashboardLic && (
          <Box
            id="detallesVacaciones"
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
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{
                  alignSelf: "center",
                }}
              >
                Detalle de Vacaciones
              </Typography>
              <LicenciasDetalles />
              <LicenciasDetalles />
              <LicenciasDetalles />
            </Box>
          </Box>
        )}
      </section>
    </>
  );
};

export default Licencia;
