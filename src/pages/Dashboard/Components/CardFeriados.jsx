import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import feriadosImg from "../../../Assets/Dashboard/feriadoImg.jpg";
const CardFeriados = () => {
  const feriados = [
    { dia: 24, mes: "febrero", desc: "Carnaval" },
    { dia: 24, mes: "febrero", desc: "Carnaval" },
  ];
  return (
    <Card sx={{ width: 300, height: "fit-content" }}>
      <CardContent>
        <img src={feriadosImg} alt="Feriados image" />
        <Typography variant="subtitle1">Próximos feriados</Typography>
        {feriados.map(({ dia, mes, desc }) => {
          return (
            <Typography color={"text.secondary"}>
              {dia && mes && `${dia} - ${mes} (${desc})`}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CardFeriados;
