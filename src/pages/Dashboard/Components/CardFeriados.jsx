import {
  Card,
  CardContent,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import feriadosImg from "../../../Assets/Dashboard/feriadoImg.jpg";
import { useFeriados } from "../../../Hooks/useFeriados";
import { convertDates } from "../../../Utils/convertDates";
import "./cardFeriados.css";
const CardFeriados = () => {
  const { data, isLoading, isError, error } = useFeriados();

  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        width={"300px"}
        height={"270px"}
        animation="wave"
      />
    );
  }

  if (isError) {
    console.log("[CardClima error]: " + error);
    return (
      <Typography variant="subtitle1">
        "Error al cargar la información"
      </Typography>
    );
  }

  return (
    <>
      {data && Array.isArray(data) && (
        <Card className="tarjeta">
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <img src={feriadosImg} alt="Feriados image" />
            <Typography variant="h6">Próximos feriados</Typography>
            <Box component={"ul"} className="caja-lista">
              {data.map(({ date, description }) => {
                return (
                  <>
                    <Divider flexItem />
                    <Typography
                      key={description}
                      component={"li"}
                      color={"text.secondary"}
                    >
                      {`${convertDates(date)} (${description})`}
                    </Typography>
                  </>
                );
              })}
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default CardFeriados;
