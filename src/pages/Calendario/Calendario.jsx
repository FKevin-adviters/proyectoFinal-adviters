import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Typography } from "@mui/material";
import Feriados from "./Feriados";
import "./feriados.css"

const Calendario = () => {
  return (
    <Box id="calendarioFeriados"
    sx={{ display: "flex" }}>
      <Box
        sx={{
          padding: "20px",
          border: "0.5px solid #797979",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" color={"red"}>
          FERIADOS
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Box>
      <Box
        sx={{
          margin: "10px",
          border: "0.5px solid #797979",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <Feriados />
      </Box>
    </Box>
  );
};

export default Calendario;
