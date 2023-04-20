import { useQuery } from "react-query";
import { fetchContent } from "../Utils/fetchContent";
import { useContext } from "react";
import { ActionContext } from "../Contexts/ContextProvider";
export const useLicencias = () => {
  const { user } = useContext(ActionContext);
  const resAdminLicenses = useQuery({
    queryKey: ["adminLicenses"],
    queryFn: async () => {
      return await getLicenciasDashboardAdmin();
    },
    enabled: false,
  });
  const resUserLicenses = useQuery({
    queryKey: ["userLicenses"],
    queryFn: async () => {
      return await getLicenciasDashboardUser();
    },
    enabled: false,
  });

  const getLicenciasDashboardAdmin = async () => {
    let res = { card1: "", card2: "" };
    let token = JSON.parse(sessionStorage.getItem("token"));
    let arr = token.split(" ");
    console.log(arr[1]);

    try {
      let options = {
        token: arr[1],
      };
      let dataFetch = await fetchContent(
        "/licencias/?state=0&historial=false",
        options
      );
      res.card1 = dataFetch;
      let dataFetch1 = await fetchContent(
        "/licencias/?state=1&historial=false",
        options
      );
      res.card2 = dataFetch1;
      return res;
    } catch (error) {
      console.log(error);
      throw new Error("No se ha logrado cargar las licencia");
    }
  };

  const getLicenciasDashboardUser = async () => {
    let res = { card1: "", card2: "" };
    let token = JSON.parse(sessionStorage.getItem("token"));
    let arr = token.split(" ");
    console.log(arr[1]);

    try {
      let options = {
        headers: {
          token: arr[1],
        },
      };
      let dataCard1 =
        user?.data?.id &&
        (await fetchContent(
          `/licencias/usuario/${user?.data?.id}/list?historial=true`,
          options
        ));
      res.card1 = dataCard1;
      let dataCard2 =
        user?.data?.id &&
        (await fetchContent(
          `/licencias/usuario/${user?.data?.id}/list?historial=false`,
          options
        ));
      res.card2 = dataCard2;
      return res;
    } catch (error) {
      console.log(error);
      throw new Error("No se ha logrado cargar las licencia");
    }
  };

  return {
    resAdminLicenses,
    resUserLicenses,
  };
};
