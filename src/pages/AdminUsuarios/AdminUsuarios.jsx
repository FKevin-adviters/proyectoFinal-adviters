import { Box, Button, Divider, List, Stack, Typography } from "@mui/material";
import React from "react";
import ListItemAdm from "./Components/ListItemAdm";
import "./AdminUsuario.css";
import { Link } from "react-router-dom";

const AdminUsuarios = () => {
  return (
    <Box component={"section"} className="admin_section">
      <Box component={"article"} className="admin_list_container">
        <Stack direction="column" alignItems="center" spacing={1}>
          <Typography component={"h2"} variant={"h4"} color="error">
            Usuarios habilitados
          </Typography>
          <List dense className="admin_list">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((value, i, arr) => {
              return (
                <>
                  <ListItemAdm value={value} key={value + i} />
                  {arr.length - 1 !== i ? (
                    <Divider variant="middle" component="li" />
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </List>
        </Stack>
        <Link className="admin_link" to={"/admin-usuarios/create"}>
          <Button variant="contained" color="success">
            Crear usuario
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default AdminUsuarios;
