import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import FeriadosGenerico from "./components/FeriadosGenerico";
import "./feriados.css";
import { getFeriados } from "../../Services/feriadosServices";

function Feriados() {
  const [feriados, setFeriados] = useState([
    { fecha: "01/05/2023", motivo: "Dia del trabajador" },
    { fecha: "25/05/2023", motivo: "Revolucion de mayo" },
    { fecha: "30/05/2023", motivo: "Bailo chamame" },
  ]);

  const [setNuevoFeriado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleAgregarFeriado = () => {
    setMostrarModal(true);
  };

  const handleGuardarFeriado = (fecha, motivo) => {
    setFeriados([...feriados, { fecha, motivo }]);
    setNuevoFeriado(null);
    setMostrarModal(false);
  };

  useEffect(() => {
    const fetchData = () =>
      getFeriados()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    fetchData();
  }, []);

  return (
    <section className="seccionFeriados">
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px 20px",
            }}
          >
            <Typography variant="h4" color={"red"}>
              FERIADOS
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={handleAgregarFeriado}
            >
              Nuevo Feriado
            </Button>
          </Box>
          <Box
            id="seccionFeriados"
            sx={{
              padding: "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              width: "553px",
              height: "396px",
              border: "0.5px solid #797979",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ marginTop: "1rem", width: "100%" }}>
              {feriados.map((feriado, index) => (
                <FeriadosGenerico
                  key={index}
                  fecha={feriado.fecha}
                  motivo={feriado.motivo}
                />
              ))}
            </Box>
            {mostrarModal && (
              <FeriadoModal
                onClose={() => setMostrarModal(false)}
                onGuardar={handleGuardarFeriado}
              />
            )}
          </Box>
        </Box>
      </>
    </section>
  );
}

function FeriadoModal({ onClose, onGuardar }) {
  const [fecha, setFecha] = useState("");
  const [motivo, setMotivo] = useState("");

  const handleGuardar = () => {
    onGuardar(fecha, motivo);
  };

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: "1rem",
          minWidth: "400px",
        }}
      >
        <Typography variant="h5">Nuevo Feriado</Typography>
        <Box sx={{ mt: "1rem" }}>
          <InputLabel htmlFor="fechaInput">Fecha</InputLabel>
          <TextField
            type="date"
            id="fechaInput"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            sx={{ width: "100%", mb: "1rem" }}
          />
          <InputLabel htmlFor="motivo">Motivo</InputLabel>
          <TextField
            id="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "2rem" }}>
          <Button
            variant="contained"
            onClick={handleGuardar}
            sx={{ mr: "1rem" }}
          >
            Guardar
          </Button>
          <Button variant="contained" onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default Feriados;
