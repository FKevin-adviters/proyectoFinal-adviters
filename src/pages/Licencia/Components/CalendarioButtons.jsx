import { Box } from "@mui/material";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import MiniCalendario from "../../../Components/MiniCalendario/MiniCalendario";
import moment from "moment";

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
        customInput={<MiniCalendario fecha={endDate} />}
      />
    </Box>
  );
};

export default CalendarioButtons;
