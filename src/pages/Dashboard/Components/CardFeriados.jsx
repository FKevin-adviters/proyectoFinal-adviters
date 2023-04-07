import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import feriadosImg from "../../../Assets/Dashboard/feriadoImg.jpg";
import { useFeriados } from "../../../Hooks/useFeriados";
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
        <Card sx={{ width: 300, height: "fit-content" }}>
          <CardContent>
            <img src={feriadosImg} alt="Feriados image" />
            <Typography variant="subtitle1">Próximos feriados</Typography>
            <Box component={"ul"} sx={{ height: "100px", overflowY: "auto" }}>
              {data.map(({ dia, mes, tipo }) => {
                return (
                  <Typography
                    key={tipo}
                    component={"li"}
                    color={"text.secondary"}
                  >
                    {`${dia} - ${mes} (${tipo})`}
                  </Typography>
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
