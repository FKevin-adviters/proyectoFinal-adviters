import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';
import Feriados from "./Feriados";

const Calendario = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
      <Box sx={{ marginLeft: '1rem' }}>
        <Feriados />
      </Box>
    </Box>
  );
};

export default Calendario;