import { Box, Button, Typography } from "@mui/material"

export const AdjuntarArchivo = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row-reverse",
        }}>
        <Typography color={"grey"}>
            ADJUNTAR ARCHIVO
            <Typography>
                No hay ningun archivo adjunto
            </Typography>
            <Button
              variant="contained"
              component="label"
            >
              Subir archivo
              <input
                hidden
                accept="image/*"
                type="file"
              />
            </Button>
        </Typography>
        </Box>
    )
}