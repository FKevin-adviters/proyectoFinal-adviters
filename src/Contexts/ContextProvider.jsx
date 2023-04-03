import React, { createContext, useState } from "react";

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
    setUser({
      isLogged: true,
      rol: {
        administrator: true,
        user: true,
      },
    });
  };
  const userLogOut = () => {
    setUser({
      isLogged: false,
      rol: {
        administrator: false,
        user: false,
      },
    });
  };
  const setAdmin = () => {
    setUser((old) => {
      return { ...old, [old.rol.administrator]: true };
    });
  };

  return (
    <ActionContext.Provider value={{ user, setAdmin, userLogIn, userLogOut }}>
      {children}
    </ActionContext.Provider>
  );
};

export default ContextProvider;
