import React from "react";
import shrek from "../../../Assets/Navbar/shrek.jpg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { redirect } from "react-router-dom";
import { redirectUrl } from "../../../Utils/changeUrl";

const ListItemAdm = ({ value }) => {
  const labelId = `checkbox-list-secondary-label-${value}`;
  return (
    <ListItem key={value}>
      <ListItemAvatar>
        <Avatar alt={`Avatar n°${value + 1}`} src={shrek} />
      </ListItemAvatar>
      <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
      <ListItemText id={labelId} primary={`Rol ${value + 1}`} />
      <ListItemIcon sx={{ gap: "5px", justifyContent: "center" }}>
        <EditIcon
          sx={{ cursor: "pointer" }}
          color={"warning"}
          onClick={() => redirectUrl(`/admin-usuarios/edit/${value}`)}
        />
        <DeleteIcon sx={{ cursor: "pointer" }} color={"error"} />
      </ListItemIcon>
    </ListItem>
  );
};

export default ListItemAdm;
