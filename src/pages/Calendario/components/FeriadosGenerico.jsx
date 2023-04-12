import { Box, Divider, Typography } from "@mui/material";

const FeriadosGenerico = ({ fecha, motivo }) => {
  return (
    <Box sx={{flexDirection: "column" }}>
      <Typography>{fecha}  {motivo}</Typography>     
      <Divider sx={{ my: 2, bgcolor: "black" }} />
    </Box>
  );
};

export default FeriadosGenerico;