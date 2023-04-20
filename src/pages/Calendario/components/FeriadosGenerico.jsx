import { Box, Divider, Typography } from "@mui/material";
import "./feriadosGenerico.css";

const FeriadosGenerico = ({ fecha, motivo }) => {
  return (
    <Box className="one-box">
      <Typography >{fecha}  {motivo}</Typography>     
      <Box className="dividir" />
    </Box>
  );
};

export default FeriadosGenerico;