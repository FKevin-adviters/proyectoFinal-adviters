import { Card, CardContent, Typography } from "@mui/material";
import React, {useContext} from "react";
import { ActionContext } from "../../../Contexts/ContextProvider";

const CardDiasDisp = () => {
  const {user: {data}} = useContext(ActionContext)
  const availableDays = data.available_days

  return (
    <Card sx={{ width: 300, height: "fit-content", textAlign: "center" }}>
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
