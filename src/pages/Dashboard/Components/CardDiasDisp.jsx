import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CardDiasDisp = () => {
  return (
    <Card sx={{ width: 300, height: "fit-content", textAlign: "center" }}>
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
