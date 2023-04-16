import React, { createContext, useState } from "react";

export const ActionContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    isLogged: false,
  });
  const userLogIn = () => {
    setUser({ ...user, isLogged: true });
  };
  const userLogOut = () => {
    setUser({ ...user, isLogged: false });
  };
  const setUserData = (userData) => {
    setUser({
      ...user,
      data: userData,
      isLogged: true,
    });
  };

  return (
    <ActionContext.Provider
      value={{ user, userLogIn, userLogOut, setUserData }}
    >
      {children}
    </ActionContext.Provider>
  );
};

export default ContextProvider;
