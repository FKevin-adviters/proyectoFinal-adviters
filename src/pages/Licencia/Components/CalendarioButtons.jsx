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

  const setInfo = (e) => {
    console.log(e);
  };

  return (
    <Box sx={{ display: "flex", gap: "40px" }}>
      <ReactDatePicker
        selected={startDate}
        onChange={(date, e) => {
          setStartDate(date);
          setInfo(e);
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
          setInfo(e);
        }}
        withPortal
        name="endDate"
        customInput={<MiniCalendario fecha={endDate} />}
      />
    </Box>
  );
};

export default CalendarioButtons;
