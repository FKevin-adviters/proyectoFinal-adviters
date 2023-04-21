import {
  Avatar,
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { convertDates } from "../../../Utils/convertDates";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { setStatusLicense } from "../../../Services/licenciasServices";
import { colores, estadoColores } from "../../../constants/constantes";

const names = {
  0: "Tramites",
  1: "Vacaciones",
  2: "Dia de Estudio",
  3: "Licencia Medica",
};

const ListItemUser = ({ licencia, admin }) => {
  const { usuarioDTO, startDate, endDate, licenseTypeId, licenseId, status } =
    licencia;
  const redirect = useNavigate();

  const updateLicense = (e, status) => {
    e.stopPropagation();
    setStatusLicense(licenseId, status)
      .then(() => {
        redirect(0);
        toast.success(
          `Se ha logrado ${status == 1 ? "aprobar" : "denegar"} la licencia`,
          {
            toastId: "license-status",
          }
        );
      })
      .catch(() => {
        toast.error(
          `No se ha podido ${status == 1 ? "aprobar" : "denegar"} la licencia`,
          {
            toastId: "license-status-error",
          }
        );
      });
  };

  return (
    <>
      <ListItem
        sx={{
          alignItems: "center",
          borderLeft: `5px solid ${estadoColores[status]}`,
        }}
        title={status ? status : "LICENCIA"}
      >
        <Link
          to={`/licencia/${licenseId}`}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <ListItemAvatar>
            <Avatar>
              {usuarioDTO.name[0].toUpperCase() +
                usuarioDTO.lastname[0].toUpperCase()}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={usuarioDTO.name + " " + usuarioDTO.lastname}
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
                  {convertDates(startDate)} - {convertDates(endDate)}
                </Typography>

                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.secondary"
                >
                  <Box
                    sx={{
                      backgroundColor: colores[licenseTypeId],
                      padding: "5px",
                      margin: "0 5px",
                      borderRadius: "100%",
                      display: "inline-block",
                    }}
                    component={"span"}
                  ></Box>
                  {names[licenseTypeId]}
                </Typography>
              </Box>
            }
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "black",
            }}
          />
        </Link>
        {admin && (
          <Box sx={{ display: "flex", marginLeft: "50px" }}>
            <ListItemIcon sx={{ gap: "15px", justifyContent: "center" }}>
              <Tooltip title="Aprobar" arrow>
                <CheckIcon
                  sx={{
                    backgroundColor: "#86FF73",
                    borderRadius: "50%",
                    padding: "2px",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={(e) => updateLicense(e, 1)}
                />
              </Tooltip>
              <Tooltip title="Denegar" arrow>
                <ClearIcon
                  sx={{
                    backgroundColor: "#FF8B8B",
                    borderRadius: "50%",
                    padding: "2px",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={(e) => updateLicense(e, 2)}
                />
              </Tooltip>
            </ListItemIcon>
          </Box>
        )}
      </ListItem>
      <Divider flexItem />
    </>
  );
};

export default ListItemUser;
