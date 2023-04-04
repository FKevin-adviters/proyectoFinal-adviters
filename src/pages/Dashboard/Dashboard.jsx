import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./Dashboard.css";
import CardDashboard from "./Components/CardDashboard";
import Buscador from "./Components/Buscador";
import ListLicencias from "../AdminUsuarios/Components/ListLicencias";
import CardDiasDisp from "../AdminUsuarios/Components/CardDiasDisp";

const Dashboard = ({ admin }) => {
  const clima = {
    ciudad: "Buenos Aires",
    temp: 35,
    humedad: 21,
    precipitaciones: 0,
    viento: 21,
  };

  const feriados = [
    { dia: 24, mes: "febrero", desc: "Carnaval" },
    { dia: 24, mes: "febrero", desc: "Carnaval" },
  ];

  // cuando tengamos el array de licencias a renderizar, se pasaría por iteracion un objeto
  // parecido a este
  const licencia = {
    tipo: "Vacaciones",
    fecha: {
      inicio: "17/09",
      final: "25/10",
    },
    usuario: "Jennifer",
  };

  return (
    <section className="dashboard_section">
      {admin ? (
        <Buscador />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="success">
            Crear Nueva Solicitud
          </Button>
        </Box>
      )}
      <Box
        component={"ul"}
        sx={{
          display: "flex",
          gap: "50px",
          listStyleType: "none",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <li className="dashboard_list-item item1">
          <CardDashboard clima={clima} />
          <CardDashboard feriados={feriados} />
        </li>
        <li className="dashboard_list-item ">
          <section>
            {admin ? (
              <>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  mx={"5px"}
                >
                  Lista solicitudes pendientes
                </Typography>

                <ListLicencias admin={true} licencia={licencia} />
              </>
            ) : (
              <>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  mx={"5px"}
                >
                  Mi Historial de Solicitudes
                </Typography>
                <ListLicencias licencia={licencia} />
              </>
            )}
          </section>
          <section>
            {admin ? (
              <>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  mx={"5px"}
                >
                  PROXIMAS LICENCIAS (APROBADAS)
                </Typography>
                <ListLicencias licencia={licencia} />
              </>
            ) : (
              <>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  mx={"5px"}
                >
                  Mis Próximas licencias
                </Typography>
                <ListLicencias licencia={licencia} />
              </>
            )}
          </section>
        </li>
        {!admin && (
          <li className="dashboard_list-item item2">
            <section>
              <Typography variant="overline" color="text.secondary" mx={"5px"}>
                Quien está ausente?
              </Typography>
              <ListLicencias licencia={licencia} />
            </section>
            <CardDiasDisp />
          </li>
        )}
      </Box>
    </section>
  );
};

export default Dashboard;
