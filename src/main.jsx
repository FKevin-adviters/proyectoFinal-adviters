import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ContextProvider from "./Contexts/ContextProvider";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ContextProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
