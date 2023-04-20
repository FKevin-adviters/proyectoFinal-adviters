import { useState } from "react";
import { fetchContent } from "../Utils/fetchContent";
export const useLicencias = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const getLicenciasDashboardAdmin = async () => {
    let token = JSON.parse(sessionStorage.getItem("token"));
    let arr = token.split(" ");
    console.log(arr[1]);

    try {
      let options = {
        token: arr[1],
      };
      setIsLoading(true);
      let dataFetch = await fetchContent(
        "/licencias/?state=0&historial=false",
        options
      );
      setData((old) => {
        return { ...old, card1: dataFetch };
      });
      let dataFetch1 = await fetchContent(
        "/licencias/?state=1&historial=false",
        options
      );
      setIsLoading(false);
      setData((old) => {
        return { ...old, card2: dataFetch1 };
      });
    } catch (error) {
      console.log(error);
      throw new Error("No se ha logrado cargar las licencia");
    }
  };

  const getLicenciasDashboardUser = async () => {
    let token = JSON.parse(sessionStorage.getItem("token"));
    let arr = token.split(" ");
    console.log(arr[1]);
    try {
      let options = {
        headers: {
          token: arr[1],
        },
      };
      setIsLoading(true);
      let data = await fetchContent(
        "/licencias/?state=0&historial=false",
        options
      );
      setIsLoading(false);
      return setData(data);
    } catch (error) {
      console.log(error);
      throw new Error("No se ha logrado cargar las licencia");
    }
  };

  return {
    data,
    isLoading,
    getLicenciasDashboardAdmin,
    getLicenciasDashboardUser,
  };
};
