import { Card, CardContent, Typography } from "@mui/material";
import React, {useContext} from "react";
import { ActionContext } from "../../../Contexts/ContextProvider";
import "./cardDiasDisp.css";

const CardDiasDisp = () => {
  const {user: {data}} = useContext(ActionContext)
  const availableDays = data.available_days

  return (
    <Card className="tarjeta">
      <CardContent>
        <Typography variant="h5">Días disponibles</Typography>
        <Typography variant="h3" color={"red"}>
            {availableDays}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDiasDisp;
