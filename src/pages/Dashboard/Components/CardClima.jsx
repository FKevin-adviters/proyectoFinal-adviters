import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { useClima } from "../../../Hooks/useClima";

const CardClima = () => {
  const { data, isLoading, isError, error } = useClima();
  let filteredData = {
    temp: data?.current?.temp_c,
    ciudad: data?.location?.name,
    humedad: data?.current?.humidity,
    viento: data?.current?.wind_kph,
    tipo: data?.current?.condition?.text,
    img: data?.current?.condition?.icon,
    precip: data?.current?.precip_in,
  };

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
      {data && (
        <Card sx={{ width: 300, height: "fit-content" }}>
          <CardContent>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {filteredData.img && (
                <CardMedia
                  component="img"
                  image={filteredData.img}
                  alt="Estado del clima"
                  sx={{ width: "40%" }}
                />
              )}
              {filteredData.temp && (
                <Typography variant="h4">{`${filteredData.temp}°C`}</Typography>
              )}
            </CardContent>
            {filteredData.ciudad && (
              <Typography
                variant="subtitle2"
                color={"text.secondary"}
              >{`${filteredData.ciudad}`}</Typography>
            )}
            {filteredData.tipo && (
              <Typography
                variant="body2"
                color="text.secondary"
              >{`Estado: ${filteredData.tipo}`}</Typography>
            )}
            {Number.isInteger(filteredData.precip) && (
              <Typography variant="body2" color="text.secondary">
                {`Prob. de precipitaciones: ${filteredData.precip}%`}
              </Typography>
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
