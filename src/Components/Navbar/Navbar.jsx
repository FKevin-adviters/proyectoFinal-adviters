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

const Navbar = () => {
  return (
    <AppBar
      position="static"
      component={"nav"}
      color="inherit"
      sx={{ boxShadow: "none" }}
    >
      <Toolbar component={"ul"} sx={{ listStyle: "none" }}>
        <MenuDesplegable menu={MenuDesplegable1} iconButton={<MenuIcon />} />
        <Typography
          variant="h6"
          component={"li"}
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Link to={"/"} style={{ color: "#797979", textDecoration: "none" }}>
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
