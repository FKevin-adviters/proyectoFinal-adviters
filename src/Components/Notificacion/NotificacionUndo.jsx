import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { toast } from "react-toastify";
import { useLicencias } from "../../Hooks/useLicencias";
import "./notificacionUndo.css";

const NotificacionUndo = ({ idLicencia, estado, closeToast }) => {
  const { refetch } = useLicencias();

  //   para testear
  const promise = new Promise((resolve) => {
    let time = setTimeout(() => {
      clearTimeout(time);
      return resolve();
    }, 3000);
  });

  const handleClick = (e) => {
    closeToast();
    promise.then(() => {
      refetch();
      toast.info(
        "Se deshicieron los cambios correctamente, licencia: " + idLicencia
      );
    });
  };

  return (
    <div className="notificacion-undo">
      Se ha {estado ? "aprobado" : "denegado"} la licencia correctamente.
      <Button variant="outlined" onClick={handleClick} size="small">
        UNDO
      </Button>
    </div>
  );
};

export default NotificacionUndo;
