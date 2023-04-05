import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import shrek from "../../../Assets/Navbar/shrek.jpg";
import { convertDates } from "../../../Utils/convertDates";

const ListItemUser = ({ licencia, admin }) => {
  const { usuario, fechaInicio, fechaFinal, tipo } = licencia;

  const colores = {
    Vacaciones: "purple",
    Tramites: "yellow",
    "Licencia Medica": "green",
    "Dia de Estudio": "cyan",
  };

  return (
    <ListItem
      sx={{
        alignItems: "center",
      }}
    >
      <ListItemAvatar>
        <Avatar alt="Shrek" src={shrek} />
      </ListItemAvatar>
      <ListItemText
        primary={usuario}
        secondary={
          <Box
            component={"span"}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              component="span"
              variant="subtitle2"
              color="text.secondary"
            >
              {convertDates(fechaInicio)} - {convertDates(fechaFinal)}
            </Typography>

            <Typography
              component="span"
              variant="subtitle2"
              color="text.secondary"
            >
              <Box
                sx={{
                  backgroundColor: colores[tipo],
                  padding: "5px",
                  margin: "0 5px",
                  borderRadius: "100%",
                  display: "inline-block",
                }}
                component={"span"}
              ></Box>
              {tipo}
            </Typography>
          </Box>
        }
        sx={{ display: "flex", flexDirection: "column" }}
      />
      {admin && (
        <Box sx={{ display: "flex", marginLeft: "50px" }}>
          <ListItemIcon sx={{ gap: "15px", justifyContent: "center" }}>
            <CheckIcon
              sx={{
                backgroundColor: "#86FF73",
                borderRadius: "50%",
                padding: "2px",
                color: "white",
                cursor: "pointer",
              }}
            />
            <ClearIcon
              sx={{
                backgroundColor: "#FF8B8B",
                borderRadius: "50%",
                padding: "2px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </ListItemIcon>
        </Box>
      )}
    </ListItem>
  );
};

export default ListItemUser;
