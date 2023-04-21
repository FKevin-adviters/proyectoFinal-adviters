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
    { fecha: "06/04/2023", motivo: "Jueves santo" },
    { fecha: "07/04/2023", motivo: "Viernes santo" },
    { fecha: "09/04/2023", motivo: "Domingo de pascuas" },
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
        <Box className="caja-1">
          <Box className="caja-2">
            <Typography variant="h4" color={"red"}>
              Feriados
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={handleAgregarFeriado}
            >
              Nuevo Feriado
            </Button>
          </Box>
          <Box className="caja-3">
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
      <Box className="caja-4">
        <Typography variant="h5">Nuevo Feriado</Typography>
        <Box sx={{ mt: "1rem" }}>
          <InputLabel htmlFor="fechaInput">Fecha</InputLabel>
          <TextField
            className="fecha"
            type="date"
            id="fechaInput"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <InputLabel htmlFor="motivo">Motivo</InputLabel>
          <TextField
            className="fecha"
            id="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />
        </Box>
        <Box className="caja-5">
          <Button
            variant="contained"
            onClick={handleGuardar}
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
