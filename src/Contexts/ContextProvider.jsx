import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ActionContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogged: false,
    rol: {
      administrator: true,
      user: true,
    },
  });
  const userLogIn = () => {
    setUser({ ...user, isLogged: true });
    toast.success("Ha ingresado correctamente", { position: "bottom-left" });
  };
  const userLogOut = () => {
    setUser({ ...user, isLogged: false });
  };
  const setAdmin = () => {
    setUser({
      ...user,
    });
  };

  return (
    <ActionContext.Provider value={{ user, setAdmin, userLogIn, userLogOut }}>
      {children}
    </ActionContext.Provider>
  );
};

export default ContextProvider;
