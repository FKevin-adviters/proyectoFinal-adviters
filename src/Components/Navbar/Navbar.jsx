import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useRef, useState } from "react";
import { ActionContext } from "../../Contexts/ContextProvider";
import shrek from "../../Assets/Navbar/shrek.jpg";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";

// probando material ui, es un navbar de prueba je
const Navbar = () => {
  const { user, userLogOut } = useContext(ActionContext);
  const [dropdown1, setDropdown1] = useState(null);
  const [dropdown2, setDropdown2] = useState(null);
  const [dropdown3, setDropdown3] = useState(null);
  const elementDropdown1 = useRef();
  const elementDropdown2 = useRef();
  const elementDropdown3 = useRef();

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

  const handleDropdown3 = () => {
    setDropdown3(elementDropdown3.current);
  };

  const handleCloseDropdown3 = () => {
    setDropdown3(null);
  };

  return (
    <AppBar
      position="static"
      component={"nav"}
      color="inherit"
      sx={{ boxShadow: "none" }}
    >
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
          {/* menu izquierda */}
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
            {user.isLogged ? (
              <MenuList>
                <MenuItem onClick={() => handleCloseDropdown2()}>
                  <Link
                    to={"/"}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Dashboard
                  </Link>
                </MenuItem>
                <MenuItem onClick={() => handleCloseDropdown2()}>
                  <Link
                    to={"/licencia"}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Licencia
                  </Link>
                </MenuItem>
                {user.data?.roles[0] === "SUPERVISOR" && (
                  <MenuItem onClick={() => handleCloseDropdown2()}>
                    <Link
                      to={"/admin-usuarios"}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Administrar usuarios
                    </Link>
                  </MenuItem>
                )}
                <MenuItem onClick={() => handleCloseDropdown2()}>
                  <Link
                    to={"/calendario"}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Calendario
                  </Link>
                </MenuItem>
              </MenuList>
            ) : (
              <MenuItem onClick={() => handleCloseDropdown2()}>
                <Link
                  to={"/"}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Ingresar
                </Link>
              </MenuItem>
            )}
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
          <Link to={"/"} style={{ color: "#797979", textDecoration: "none" }}>
            Una gran empresa
          </Link>
        </Typography>
        {user.isLogged && (
          <Box
            component={"li"}
            ref={elementDropdown1}
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar3"
              aria-haspopup="true"
              onClick={() => handleDropdown3()}
              color="inherit"
              ref={elementDropdown3}
            >
              <Badge badgeContent={2} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Menu
              id="menu-appbar3"
              anchorEl={dropdown3}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(dropdown3)}
              onClose={() => handleCloseDropdown3()}
            >
              <MenuItem onClick={() => handleCloseDropdown3()}>
                <Typography>Esto es una notificacion numero 1</Typography>
              </MenuItem>
            </Menu>
            {/* menu derecha avatar */}
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
                <Link
                  to={"/perfil"}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Mi perfil
                </Link>
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
