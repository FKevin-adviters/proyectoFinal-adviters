import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Typography } from "@mui/material";
import Feriados from "./Feriados";
import "./calendario.css";
import CalendarioPrueba from "./CalendarioPrueba";

const Calendario = () => {
  const [feriados, setFeriados] = useState([
    { fecha: "01/05/2023", motivo: "Dia del trabajador" },
    { fecha: "25/05/2023", motivo: "Revolucion de mayo" },
    { fecha: "30/05/2023", motivo: "Bailo chamame" },
  ]);

  return (
    <Box id="calendarioFeriados" className="calendarioFeriados">
      <Box className="caja">
        <Typography variant="h4" color={"red"}>
          Calendario
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DateCalendar
            slotProps={{
              day: {
                highlightedDays: [1, 2, 15],
              },
            }}
          /> */}
          <CalendarioPrueba />
        </LocalizationProvider>
      </Box>
      <Box className="caja">
        <Feriados />
      </Box>
    </Box>
  );
};

export default Calendario;
