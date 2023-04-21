import {
  AppBar,
  Avatar,
  Badge,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext } from "react";
import shrek from "../../Assets/Navbar/shrek.jpg";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuDesplegable from "./Components/MenuDesplegable";
import {
  MenuDesplegable1,
  MenuDesplegable2,
  MenuDesplegable3,
} from "../../constants/constantes";
import { ActionContext } from "../../Contexts/ContextProvider";

import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(ActionContext);

  return (
    <AppBar
      position="static"
      component={"nav"}
      color="inherit"
      className="navbar-appbar"
    >
      <Toolbar component={"ul"} className="navbar-toolbar">
        <MenuDesplegable menu={MenuDesplegable1} iconButton={<MenuIcon />} />
        <Typography variant="h6" component={"li"} className="navbar-typography">
          <Link to={"/"} className="navbar-link">
            Liberty
          </Link>
        </Typography>
        {/* menu 2 */}
        <MenuDesplegable
          menu={MenuDesplegable2}
          iconButton={
            <Badge badgeContent={1} color="primary">
              <NotificationsIcon />
            </Badge>
          }
        />
        {/* menu 3 */}
        <MenuDesplegable
          menu={MenuDesplegable3}
          iconButton={
            user?.data?.profile_picture.length > 500 ? (
              <CardMedia
                component="img"
                src={user.data.profile_picture}
                sx={{ width: "40px", objectFit: "cover", borderRadius: "50%" }}
              />
            ) : (
              <Avatar sx={{ bgcolor: "#98d8e4" }}>
                {user.data.name[0] + user.data.lastname[0]}
              </Avatar>
            )
          }
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
