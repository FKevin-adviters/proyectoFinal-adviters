import { Container, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Buscador = () => {
  return (
    <Container className="dashboard_list-item">
      <TextField
        id="outlined-search"
        label="Buscar usuario"
        type="search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default Buscador;
