import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ContextProvider, { ActionContext } from "./Contexts/ContextProvider";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import "moment/locale/es";
import {
  checkLocalStorageAndToken,
  getDecryptedUserFromLS,
  loginUser,
} from "./Services/loginUser";
moment.locale("es");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
});

export const LoggedUser = () => {
  const { setUserData } = useContext(ActionContext);

  useEffect(() => {
    let fetchUser = async () => {
      try {
        let isTokenValid = await checkLocalStorageAndToken();
        if (isTokenValid) {
          let user = getDecryptedUserFromLS();
          let data = await loginUser(user);
          if (data?.user) {
            setUserData(data?.user);
            data?.token
              ? localStorage.setItem("token", JSON.stringify(data?.token))
              : "";
          }
        }
      } catch (error) {
        return console.log(error);
      }
    };
    fetchUser();
  }, []);
  return <></>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <LoggedUser />
          <ToastContainer
            closeOnClick={false}
            limit={3}
            position={"bottom-left"}
            autoClose={2000}
            newestOnTop
          />
          <App />
        </ContextProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
