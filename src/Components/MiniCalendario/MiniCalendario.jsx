import { Box } from "@mui/material"; // Importa el componente Box de la biblioteca @mui/material
import moment from "moment/moment"; // Importa la biblioteca Moment.js para trabajar con fechas
import "./miniCalendario.css"; // Importa el archivo de estilos CSS para el componente

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
  if (defaultValues) {
    fechaParsed = moment(defaultValues);
  }

  return (
    <Box className="cuadrado" onClick={!defaultValues ? onClick : undefined}> {/* Crea un cuadro de la biblioteca Box de MUI y le aplica la clase CSS "cuadrado" y la función onClick */}
      {/* Encabezado */}
      <Box className="encabezado"> {/* Crea otra caja y le aplica la clase CSS "encabezado" */}
        {fechaParsed ? moment.months(fechaParsed.get("month")) : ""} {/* Muestra el mes si la fechaParsed no es nula */}
      </Box>

      {/* Contenido del cuadrado */}
      <Box className="contenido"> {/* Crea otra caja y le aplica la clase CSS "contenido" */}
        {/* Día actual */}
        <Box className="dia">{fechaParsed ? fechaParsed.date() : ""}</Box> {/* Muestra el día si la fechaParsed no es nula */}

        {/* Día de la semana */}
        <Box className="diaSemana">
          {fechaParsed ? moment.weekdays(fechaParsed.get("day")) : ""} {/* Muestra el día de la semana si la fechaParsed no es nula */}
        </Box>
      </Box>
    </Box>
  );
}

export default MiniCalendario; // Exporta el componente MiniCalendario para su uso en otros archivos