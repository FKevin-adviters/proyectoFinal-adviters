import {
  Box,
  Button,
  Card,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import Buscador from "./Components/Buscador";
import ListLicencias from "./Components/ListLicencias";
import CardDiasDisp from "./Components/CardDiasDisp";
import { useLicencias } from "../../Hooks/useLicencias";
import CardClima from "./Components/CardClima";
import CardFeriados from "./Components/CardFeriados";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { ActionContext } from "../../Contexts/ContextProvider";

const Dashboard = ({ admin }) => {
  const { resAdminLicenses, resUserLicenses } = useLicencias();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();

  // cuando tengamos el array de licencias a renderizar, se pasaría por iteracion un objeto
  // parecido a este
  useEffect(() => {
    if (admin) {
      const fetchData = () => {
        resAdminLicenses
          .refetch()
          .then((res) => {
            setIsLoading(false);
            console.log(res.data);
            setData(res.data);
            toast.success("La carga de licencias ha terminado", {
              toastId: "licencias-success",
            });
          })
          .catch(() => {
            setIsError(true);

            toast.error("No se ha logrado encontrar las licencias", {
              toastId: "licencias-error",
            });
          });
      };
      return fetchData();
    } else {
      resUserLicenses
        .refetch()
        .then((res) => {
          setIsLoading(false);
          console.log(res.data);
          setData(res.data);
          toast.success("La carga de licencias ha terminado", {
            toastId: "licencias-success",
          });
        })
        .catch(() => {
          setIsError(true);
          toast.error("No se ha logrado encontrar las licencias", {
            toastId: "licencias-error",
          });
        });
    }
  }, []);

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
                {resAdminLicenses.isLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {resAdminLicenses.isError && "ERROR AL CARGAR LAS LICENCIAS"}
                {resAdminLicenses.data && (
                  <ListLicencias
                    admin={true}
                    licencias={resAdminLicenses.data?.card1}
                  />
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
                {resUserLicenses.isLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {resUserLicenses.isError && "ERROR AL CARGAR LAS LICENCIAS"}
                {resUserLicenses.data && (
                  <ListLicencias licencias={resUserLicenses.data?.card1} />
                )}
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
                {resAdminLicenses.isLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {resAdminLicenses.isError && "ERROR AL CARGAR LAS LICENCIAS"}
                {resAdminLicenses.data && (
                  <ListLicencias licencias={resAdminLicenses.data?.card2} />
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
                  Mis Próximas licencias
                </Typography>
                {resUserLicenses.isLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {resUserLicenses.isError && "ERROR AL CARGAR LAS LICENCIAS"}
                {resUserLicenses.data && (
                  <ListLicencias licencias={resUserLicenses.data?.card2} />
                )}
              </>
            )}
          </section>
        </li>
        {/* es usuario */}
        {!admin && (
          /* hacer otro componente */
          <li className="dashboard_list-item item2">
            {/* <section>
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
            </section> */}
            <CardDiasDisp />
          </li>
        )}
      </Box>
      <Outlet />
    </section>
  );
};

export default Dashboard;
