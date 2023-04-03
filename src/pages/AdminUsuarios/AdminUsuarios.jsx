import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import shrek from "../../Assets/Navbar/shrek.jpg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminUsuarios = () => {
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FBFBFB",
        minHeight: "90vh",
        padding: "0 30px",
      }}
    >
      <Box
        component={"article"}
        sx={{
          width: "80%",
          height: "100%",
          display: "flex",
          padding: "50px 0",
          alignItems: "flex-start",
          justifyContent: "space-around",
          border: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack direction="column" alignItems="center" spacing={1}>
          <Typography component={"h2"} variant={"h4"} color="error">
            Usuarios habilitados
          </Typography>
          <List
            dense
            sx={{
              width: "100%",
              height: "300px",
              overflowY: "auto",
              maxWidth: 360,
              bgcolor: "background.paper",
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "10px",
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((value, i, arr) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <>
                  <ListItem key={value}>
                    <ListItemAvatar>
                      <Avatar alt={`Avatar n°${value + 1}`} src={shrek} />
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      primary={`Line item ${value + 1}`}
                    />
                    <ListItemText id={labelId} primary={`Rol ${value + 1}`} />

                    <ListItemIcon sx={{ gap: "5px", justifyContent: "center" }}>
                      <EditIcon sx={{ cursor: "pointer" }} color={"warning"} />
                      <DeleteIcon sx={{ cursor: "pointer" }} color={"error"} />
                    </ListItemIcon>
                  </ListItem>
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
        <Button variant="contained" color="success">
          Crear usuario
        </Button>
      </Box>
    </Box>
  );
};

export default AdminUsuarios;
