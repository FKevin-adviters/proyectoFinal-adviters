import { Box } from "@mui/material";
import React, { useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import MiniCalendario from "../../../Components/MiniCalendario/MiniCalendario";
import moment from "moment";
import { es } from "date-fns/locale";

registerLocale("es", es);

const CalendarioButtons = ({ setLicenciaData }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const isWeekday = (date) => {
    const day = moment(date).days();
    return day !== 0 && day !== 6;
  };

  const setInfo = (date, dateName) => {
    console.log(date, dateName);
    setLicenciaData((old) => {
      return { ...old, [dateName]: date };
    });
  };

  return (
    <Box sx={{ display: "flex", gap: "40px" }}>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          setInfo(date, "startDate");
        }}
        withPortal
        name="startDate"
        filterDate={isWeekday}
        customInput={<MiniCalendario fecha={startDate} />}
        locale={"es"}
      />

      <ReactDatePicker
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
          setInfo(date, "endDate");
        }}
        withPortal
        name="endDate"
        filterDate={isWeekday}
        minDate={startDate}
        customInput={<MiniCalendario fecha={endDate} />}
        locale={"es"}
      />
    </Box>
  );
};

export default CalendarioButtons;
