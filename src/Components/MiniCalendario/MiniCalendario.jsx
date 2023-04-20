import { Box } from "@mui/material"; // Importa el componente Box de la biblioteca @mui/material
import moment from "moment/moment"; // Importa la biblioteca Moment.js para trabajar con fechas
import "./miniCalendario.css"; // Importa el archivo de estilos CSS para el componente

function MiniCalendario({ fecha, onClick, defaultValues }) {
  let fechaParsed = fecha ? moment(fecha) : null;
  if (defaultValues) {
    fechaParsed = moment(defaultValues);
  }

  return (
    <Box className="cuadrado" onClick={!defaultValues ? onClick : undefined}>
      {" "}
      {/* Crea un cuadro de la biblioteca Box de MUI y le aplica la clase CSS "cuadrado" y la función onClick */}
      {/* Encabezado */}
      <Box className="encabezado">
        {" "}
        {/* Crea otra caja y le aplica la clase CSS "encabezado" */}
        {fechaParsed ? moment.months(fechaParsed.get("month")) : ""}{" "}
        {/* Muestra el mes si la fechaParsed no es nula */}
      </Box>
      {/* Contenido del cuadrado */}
      <Box className="contenido">
        {" "}
        {/* Crea otra caja y le aplica la clase CSS "contenido" */}
        {/* Día actual */}
        <Box className="dia">{fechaParsed ? fechaParsed.date() : ""}</Box>{" "}
        {/* Muestra el día si la fechaParsed no es nula */}
        {/* Día de la semana */}
        <Box className="diaSemana">
          {fechaParsed ? moment.weekdays(fechaParsed.get("day")) : ""}{" "}
          {/* Muestra el día de la semana si la fechaParsed no es nula */}
        </Box>
      </Box>
    </Box>
  );
}

export default MiniCalendario; // Exporta el componente MiniCalendario para su uso en otros archivos
