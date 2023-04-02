import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useRef, useState } from "react";
import { ActionContext } from "../../Contexts/ContextProvider";
import { AccountCircle } from "@mui/icons-material";
import shrek from "../../Assets/Navbar/shrek.jpg";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

// probando material ui, es un navbar de prueba je
const Navbar = () => {
  const { user, userLogOut } = useContext(ActionContext);
  const [dropdown1, setDropdown1] = useState(null);
  const [dropdown2, setDropdown2] = useState(null);
  const elementDropdown1 = useRef();
  const elementDropdown2 = useRef();

  const handleDropdown1 = () => {
    setDropdown1(elementDropdown1.current);
  };

  const handleCloseDropdown1 = () => {
    setDropdown1(null);
  };

  const handleDropdown2 = () => {
    setDropdown2(elementDropdown2.current);
  };

  const handleCloseDropdown2 = () => {
    setDropdown2(null);
  };

  return (
    <AppBar position="static" component={"nav"}>
      <Toolbar component={"ul"} sx={{ listStyle: "none" }}>
        <Box component={"li"} ref={elementDropdown2}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleDropdown2()}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar1"
            anchorEl={dropdown2}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(dropdown2)}
            onClose={() => handleCloseDropdown2()}
          >
            <MenuItem onClick={() => handleCloseDropdown2()}>
              {user.isLogged ? (
                <Link
                  to={"/"}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to={"/"}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Ingresar
                </Link>
              )}
            </MenuItem>
            <MenuItem onClick={() => handleCloseDropdown2()}>
              <Link
                to={"/licencia"}
                style={{ color: "black", textDecoration: "none" }}
              >
                Licencia
              </Link>
            </MenuItem>
            <MenuItem onClick={() => handleCloseDropdown2()}>
              <Link
                to={"/calendario"}
                style={{ color: "black", textDecoration: "none" }}
              >
                Calendario
              </Link>
            </MenuItem>
          </Menu>
        </Box>
        <Typography
          variant="h6"
          component={"li"}
          sx={{
            flexGrow: 1,
            justifyContent: `${user.isLogged ? "center" : "flex-end"}`,
            display: "flex",
          }}
        >
          <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
            Adviters
          </Link>
        </Typography>
        {user.isLogged && (
          <Box component={"li"} ref={elementDropdown1}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => handleDropdown1()}
              color="inherit"
            >
              <Avatar alt="Remy Sharp" src={shrek} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={dropdown1}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(dropdown1)}
              onClose={() => handleCloseDropdown1()}
            >
              <MenuItem onClick={() => handleCloseDropdown1()} component={"li"}>
                Profile
              </MenuItem>
              <MenuItem onClick={() => handleCloseDropdown1()} component={"li"}>
                My account
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseDropdown1();
                  userLogOut();
                }}
                component={"li"}
              >
                Cerrar sesión
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
