import React, { useContext, useRef, useState } from "react";
import { ActionContext } from "../../../Contexts/ContextProvider";
import { IconButton, Menu, MenuItem, MenuList } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const MenuDesplegable = ({ menu, iconButton }) => {
  const { user, userLogOut } = useContext(ActionContext);
  const [dropdown, setDropdown] = useState(null);
  const anchorRef = useRef();

  const handleDropdown = () => {
    setDropdown(anchorRef.current);
  };

  const handleCloseDropdown = () => {
    setDropdown(null);
  };

  return (
    <Box component={"li"} ref={anchorRef}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => handleDropdown()}
      >
        {iconButton ? iconButton : ""}
      </IconButton>
      <Menu
        id={menu.id}
        anchorEl={dropdown}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(dropdown)}
        onClose={() => handleCloseDropdown()}
      >
        <MenuList>
          {menu.values.map((menuItem) => {
            if (
              menuItem.link === "/admin-usuarios" &&
              user.data?.roles[0] !== "SUPERVISOR"
            ) {
              return;
            }
            return (
              <MenuItem
                onClick={() => {
                  handleCloseDropdown();
                  menuItem.userLogOut ? userLogOut() : "";
                }}
              >
                {menuItem.link ? (
                  <Link
                    to={menuItem.link}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {menuItem.name}
                  </Link>
                ) : (
                  menuItem.name
                )}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MenuDesplegable;
