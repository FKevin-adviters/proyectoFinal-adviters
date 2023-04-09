import { useQuery } from "react-query";
// de forma provisoria se utiliza esta función para ver la información del mockapi
import { getLicenciasAdm } from "../Services/licenciasServices/Admin/licenciasAdminServices";

export const useLicencias = (id) => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery(["useLicencias", id || ""], async () => {
    return getLicenciasAdm(id || "");
  });

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isRefetchError,
    isRefetching,
  };
};
