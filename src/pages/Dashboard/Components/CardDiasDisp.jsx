import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./cardDiasDisp.css";

const CardDiasDisp = () => {
  return (
    <Card className="tarjeta">
      <CardContent>
        <Typography variant="h5">Días disponibles</Typography>
        <Typography variant="h3" color={"red"}>
          24
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDiasDisp;
