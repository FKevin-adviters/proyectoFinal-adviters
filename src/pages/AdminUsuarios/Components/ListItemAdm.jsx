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
import { useNavigate } from "react-router-dom";
import './ListItemAdm.css';

const ListItemAdm = ({ value }) => {
  const navigate = useNavigate();
  const labelId = `checkbox-list-secondary-label-${value}`;
  return (
    <ListItem key={value}>
      <ListItemAvatar>
        <Avatar alt={`Avatar n°${value + 1}`} src={shrek} />
      </ListItemAvatar>
      <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
      <ListItemText id={labelId} primary={`Rol ${value + 1}`} />
      <ListItemIcon className="list-item-icon">
        <EditIcon className="edit-delete-icon" color={"warning"} onClick={() => navigate(`/admin-usuarios/edit/${value}`)} />
        <DeleteIcon className="edit-delete-icon" color={"error"} />
      </ListItemIcon>
    </ListItem>
  );
};

export default ListItemAdm;
