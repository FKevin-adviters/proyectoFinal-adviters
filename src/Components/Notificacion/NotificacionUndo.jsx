import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { toast } from "react-toastify";
import { useLicencias } from "../../Hooks/useLicencias";

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
    <Box sx={{ display: "flex", gap: "5px" }}>
      Se ha {estado ? "aprobado" : "denegado"} la licencia correctamente.
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{ fontSize: "1.5vmin" }}
        size="small"
      >
        UNDO
      </Button>
    </Box>
  );
};

export default NotificacionUndo;
