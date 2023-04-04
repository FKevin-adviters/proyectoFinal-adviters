import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import feriadosImg from "../../../Assets/Dashboard/feriadoImg.jpg";

const CardDashboard = ({ clima, feriados }) => {
  return (
    <Card sx={{ width: 300 }} component={"section"}>
      <CardContent>
        {clima && (
          <>
            <Typography variant="h5" color="text.secondary">
              {clima?.ciudad && clima?.temp && `Buenos Aires: ${clima?.temp}°C`}
            </Typography>
            <Typography>
              {typeof clima?.precipitaciones == "number" &&
                "Prob. de precipitaciones: " + clima?.precipitaciones}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {clima?.humedad && `Humedad: ${clima?.humedad}%`}
            </Typography>
            <Typography variant="body2">
              {clima?.humedad && `Viento: a ${clima?.viento} km/h`}
            </Typography>
          </>
        )}
        {feriados && feriados.length > 0 && (
          <>
            <img src={feriadosImg} alt="Feriados image" />
            <Typography variant="subtitle1">Próximos feriados</Typography>
            {feriados.map(({ dia, mes, desc }) => {
              return (
                <Typography color={"text.secondary"}>
                  {dia && mes && `${dia} - ${mes} (${desc})`}
                </Typography>
              );
            })}
          </>
        )}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default CardDashboard;
