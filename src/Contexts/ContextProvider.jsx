import React, { createContext, useState } from "react";

export const ActionContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogged: false,
  });
  const userLogIn = () => {
    setUser({ ...user, isLogged: true });
  };
  const userLogOut = () => {
    setUser({ ...user, isLogged: false });
    localStorage.clear();
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
