import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Typography } from "@mui/material";
import Feriados from "./Feriados";
import "./calendario.css";

const Calendario = () => {
  return (
    <Box id="calendarioFeriados" className="calendarioFeriados">
      <Box className="caja">
        <Typography variant="h4" color={"red"}>
          Calendario
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Box>
      <Box className="caja">
        <Feriados />
      </Box>
    </Box>
  );
};

export default Calendario;
