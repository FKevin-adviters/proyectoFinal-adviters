import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useClima } from "../../../Hooks/useClima";

const CardClima = () => {
  const { data, isLoading, isError, error } = useClima();
  let filteredData = {
    temp: data?.main?.temp,
    ciudad: data?.name,
    humedad: data?.main?.humidity,
    viento: data?.wind?.speed,
    tipo: data?.weather[0].main,
  };

  const clima = {
    ciudad: "Buenos Aires",
    temp: 35,
    humedad: 21,
    precipitaciones: 0,
    viento: 21,
  };

  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        width={"300px"}
        height={"130px"}
        animation="wave"
      />
    );
  }
  if (isError) {
    throw new Error("[CardClima error]: " + error);
  }

  return (
    <>
      {data && (
        <Card sx={{ width: 300, height: "fit-content" }}>
          <CardContent>
            {filteredData.temp && filteredData.ciudad && (
              <Typography variant="subtitle1">
                {`${filteredData.ciudad}: ${filteredData.temp}°C`}
              </Typography>
            )}
            {filteredData.tipo && (
              <Typography
                variant="body2"
                color="text.secondary"
              >{`Estado: ${filteredData.tipo}`}</Typography>
            )}

            {filteredData.humedad && (
              <Typography variant="body2" color="text.secondary">
                {`Humedad: ${filteredData.humedad}%`}
              </Typography>
            )}

            {filteredData.viento && (
              <Typography variant="body2" color="text.secondary">
                {`Viento: a ${filteredData.viento} km/h`}
              </Typography>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default CardClima;
