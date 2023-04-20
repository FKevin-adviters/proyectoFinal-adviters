import { AppBar, Avatar, Badge, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import shrek from "../../Assets/Navbar/shrek.jpg";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuDesplegable from "./Components/MenuDesplegable";
import {
  MenuDesplegable1,
  MenuDesplegable2,
  MenuDesplegable3,
} from "../../constants/constantes";
import "./navbar.css"; 

const Navbar = () => {
  return (
    <AppBar
      position="static"
      component={"nav"}
      color="inherit"
      className="navbar-appbar" 
    >
      <Toolbar component={"ul"} className="navbar-toolbar"> 
        <MenuDesplegable menu={MenuDesplegable1} iconButton={<MenuIcon />} />
        <Typography
          variant="h6"
          component={"li"}
          className="navbar-typography" 
        >
          <Link
            to={"/"}
            className="navbar-link" 
          >
            Liberty
          </Link>
        </Typography>
        {/* menu 2 */}
        <MenuDesplegable
          menu={MenuDesplegable2}
          iconButton={
            <Badge badgeContent={2} color="primary">
              <NotificationsIcon />
            </Badge>
          }
        />
        {/* menu 3 */}
        <MenuDesplegable
          menu={MenuDesplegable3}
          iconButton={<Avatar alt="Remy Sharp" src={shrek} />}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
