import { Create } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"


export const LicenciasDetalles = () => {
    return (
    <Box sx={{
        display: "flex",
        minWidth: "100%",
        height: "30%",
        border: "1px solid grey",
        justifyContent: "space-around"
      }} >
        <Typography>
          <Typography variant="h6">Licencia</Typography>
          <Typography color={"grey"}>Dias totales: 1</Typography>
          <Typography>Licencia medica</Typography>
        </Typography>
        <Typography>
          <Typography color={"grey"}>Dias tomados: 1</Typography>
          <Typography color={"red"}>12/01 - 15/01</Typography>
        </Typography>
        <Create sx={{
          alignSelf: "center",
          color: "#8a6511"
        }}></Create>
      </Box>
      )
}