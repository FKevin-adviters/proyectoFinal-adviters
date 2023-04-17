import {
  Box,
  Button,
  Card,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import "./Dashboard.css";
import Buscador from "./Components/Buscador";
import ListLicencias from "./Components/ListLicencias";
import CardDiasDisp from "./Components/CardDiasDisp";
import { useLicencias } from "../../Hooks/useLicencias";
import CardClima from "./Components/CardClima";
import CardFeriados from "./Components/CardFeriados";

const Dashboard = ({ admin }) => {
  // const { data, isLoading, isError, isRefetching, isRefetchingError } =
  //   useLicencias();
  let isLoading = true;
  let isError = false;
  let isRefetchingError = false;
  let data = false;

  // cuando tengamos el array de licencias a renderizar, se pasaría por iteracion un objeto
  // parecido a este

  return (
    <section className="dashboard_section">
      {/* hacer componente */}
      {admin ? (
        <Buscador />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "flex-end", mx: "20%" }}>
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
          <CardClima />
          <CardFeriados />
        </li>
        <li className="dashboard_list-item ">
          {/* hacer dos componentes */}
          <section>
            {admin ? (
              // es admin
              <>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  mx={"5px"}
                >
                  Lista solicitudes pendientes
                </Typography>
                {(isLoading || isRefetching) && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {(isError || isRefetchingError) &&
                  "ERROR AL CARGAR LAS LICENCIAS"}
                {data && !isRefetching && (
                  <ListLicencias admin={true} licencias={data} />
                )}
              </>
            ) : (
              // es usuario
              <>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  mx={"5px"}
                >
                  Mi Historial de Solicitudes
                </Typography>
                {isLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {isError && "ERROR AL CARGAR LAS LICENCIAS"}
                {data && <ListLicencias licencias={data} />}
              </>
            )}
          </section>
          <section>
            {admin ? (
              // es admin
              <>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  mx={"5px"}
                >
                  PROXIMAS LICENCIAS (APROBADAS)
                </Typography>
                {(isLoading || isRefetching) && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {(isError || isRefetchingError) &&
                  "ERROR AL CARGAR LAS LICENCIAS"}
                {data && !isRefetching && <ListLicencias licencias={data} />}
              </>
            ) : (
              // es usuario
              <>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  mx={"5px"}
                >
                  Mis Próximas licencias
                </Typography>
                {isLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {isError && "ERROR AL CARGAR LAS LICENCIAS"}
                {data && <ListLicencias licencias={data} />}
              </>
            )}
          </section>
        </li>
        {/* es usuario */}
        {!admin && (
          /* hacer otro componente */
          <li className="dashboard_list-item item2">
            <section>
              <Typography variant="overline" color="text.secondary" mx={"5px"}>
                Quien está ausente?
              </Typography>
              {isLoading && (
                <Skeleton
                  variant="rectangular"
                  width={"300px"}
                  height={"340px"}
                  animation="wave"
                />
              )}
              {isError && "ERROR AL CARGAR LAS LICENCIAS"}
              {data && <ListLicencias licencias={data} />}
            </section>
            <CardDiasDisp />
          </li>
        )}
      </Box>
    </section>
  );
};

export default Dashboard;
