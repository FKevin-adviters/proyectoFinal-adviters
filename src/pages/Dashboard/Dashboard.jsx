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
// import { useLicencias } from "../../Hooks/useLicencias";
import CardClima from "./Components/CardClima";
import CardFeriados from "./Components/CardFeriados";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { getLicenseByStateAndHist } from "../../Services/licenciasServices";

const Dashboard = ({ admin }) => {
  // const {  } = useLicencias();
  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // cuando tengamos el array de licencias a renderizar, se pasaría por iteracion un objeto
  // parecido a este
  useEffect(() => {
    if (admin) {
      const fetchData = () => {
        // card1
        getLicenseByStateAndHist(0, false)
          .then((res) => {
            setCard1(res);
          })
          .catch((err) => {
            setCard1(null);
            console.log(err);
          });
        // card2
        getLicenseByStateAndHist(1, false)
          .then((res) => {
            setCard2(res);
          })
          .catch((err) => {
            setCard2(null);
            console.log(err);
          });
      };
      return fetchData();
    } else {
      const fetchData = () => {
        // card1
        getLicenseByStateAndHist(1, true)
          .then((res) => {
            setCard1(res);
          })
          .catch((err) => {
            setCard1(null);
            console.log(err);
          });
        // card2
        getLicenseByStateAndHist(1, false)
          .then((res) => {
            setCard2(res);
          })
          .catch((err) => {
            setCard2(null);
            console.log(err);
          });
      };
      return fetchData();
    }
  }, []);

  return (
    <section className="dashboard_section">
      {/* hacer componente */}
      {admin ? (
        <Buscador />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "flex-end", mx: "20%" }}>
          <Link to={"/licencia"}>
            <Button variant="contained" color="success">
              Crear Nueva Solicitud
            </Button>
          </Link>
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
                {isLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {isError && "ERROR AL CARGAR LAS LICENCIAS"}
                {card1 && (
                  <ListLicencias
                    admin={true}
                    licencias={card1}
                    refetch={refetch}
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
                {isLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {isError && "ERROR AL CARGAR LAS LICENCIAS"}
                {card1 && <ListLicencias licencias={card1} />}
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
                {isLoading && (
                  <Skeleton
                    variant="rectangular"
                    width={"300px"}
                    height={"340px"}
                    animation="wave"
                  />
                )}
                {isError && "ERROR AL CARGAR LAS LICENCIAS"}
                {card2 && <ListLicencias licencias={card2} />}
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
                {card2 && <ListLicencias licencias={card2} />}
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
