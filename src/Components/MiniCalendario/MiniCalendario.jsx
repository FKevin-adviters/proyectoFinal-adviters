import { Box } from "@mui/material";
import moment from "moment/moment";
import "moment/locale/es"; // without this line it didn't work
moment.locale("es");

function MiniCalendario({ fecha, onClick }) {
  const estilosEncabezado = {
    width: "100%",
    height: "37px",
    background: "#FF4646",
    padding: "8px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "0.5px solid #797979",
    fontFamily: "Roboto",
    color: "#FFFFFF",
    borderRadius: "8px 8px 0px 0px",
  };

  const estilosContenido = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
  };

  const estilosDia = {
    fontSize: "24px",
    lineHeight: "150%",
    textAlign: "center",
    letterSpacing: "0.5px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    color: "#797979",
  };

  const estilosDiaSemana = {
    fontSize: "20px",
    lineHeight: "150%",
    textAlign: "center",
    letterSpacing: "0.15px",
    textTransform: "capitalize",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    color: "#797979",
    marginTop: "-8px",
  };

  const estilosCuadrado = {
    width: "102px",
    height: "95px",
    borderRadius: "8px",
    background: "#FFFFFF",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    border: "0.5px solid #797979",
    cursor: "pointer",
  };

  const fechaParsed = fecha ? moment(fecha) : null;

  return (
    <Box sx={estilosCuadrado} onClick={onClick}>
      {/* Encabezado */}
      <Box
        sx={{
          ...estilosEncabezado,
          fontSize: "14px",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {fechaParsed ? moment.months(fechaParsed.get("month")) : ""}
      </Box>

      {/* Contenido del cuadrado */}
      <Box sx={estilosContenido}>
        {/* Día actual */}
        <Box sx={estilosDia}>{fechaParsed ? fechaParsed.date() : ""}</Box>

        {/* Día de la semana */}
        <Box sx={estilosDiaSemana}>
          {fechaParsed ? moment.weekdays(fechaParsed.get("day")) : ""}
        </Box>
      </Box>
    </Box>
  );
}

export default MiniCalendario;
