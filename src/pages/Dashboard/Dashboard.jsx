import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  InputAdornment,
  List,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./Dashboard.css";
import CardDashboard from "./Components/CardDashboard";
import Buscador from "./Components/Buscador";
import ListLicencias from "../AdminUsuarios/Components/ListLicencias";

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

  return (
    <section className="dashboard_section">
      {admin && <Buscador />}
      <Container
        component={"ul"}
        sx={{
          display: "flex",
          gap: "50px",
          listStyleType: "none",
          justifyContent: "center",
          alignItems: "center",
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

                <ListLicencias admin={true} />
              </>
            ) : (
              <ListLicencias />
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
                <ListLicencias />
              </>
            ) : (
              <ul>PROXIMAS LICENCIAS (APROBADAS) DEL USUARIO</ul>
            )}
          </section>
        </li>
        {!admin && (
          <li className="dashboard_list-item">
            <section>
              <h3>Quien está ausente?</h3>
              <ul>LISTA DE AUSENTES</ul>
            </section>
            <section>
              <h4>Días disponibles</h4>
              <span>24</span>
            </section>
          </li>
        )}
      </Container>
    </section>
  );
};

export default Dashboard;
