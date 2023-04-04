import {
  Avatar,
  Badge,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { ActionContext } from "../../../Contexts/ContextProvider";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import shrek from "../../../Assets/Navbar/shrek.jpg";

const ListItemUser = ({ licencia, admin }) => {
  const { usuario, fecha, tipo } = licencia;

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
          <>
            <Typography
              component="div"
              variant="subtitle2"
              color="text.secondary"
            >
              {fecha.inicio} - {fecha.final}
            </Typography>

            <Typography
              component="div"
              variant="subtitle2"
              color="text.secondary"
            >
              <Box
                sx={{
                  backgroundColor: colores[tipo],
                  padding: "5px",
                  borderRadius: "100%",
                  display: "inline-block",
                }}
              ></Box>{" "}
              {tipo}
            </Typography>
          </>
        }
      />
      {admin && (
        <Box sx={{ display: "flex" }}>
          <ListItemIcon sx={{ gap: "5px", justifyContent: "center" }}>
            <CheckIcon
              sx={{
                backgroundColor: "green",
                borderRadius: "50%",
                padding: "2px",
                color: "white",
                cursor: "pointer",
              }}
            />
            <ClearIcon
              sx={{
                backgroundColor: "red",
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
