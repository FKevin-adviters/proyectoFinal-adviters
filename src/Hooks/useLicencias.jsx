import { useQuery } from "react-query";
import { getLicencias } from "../Services/licenciasServices";

export const useLicencias = (id) => {
  const { data, isLoading, isError, error } = useQuery(
    ["useLicencias", id || ""],
    async () => {
      return getLicencias(id || "");
    }
  );

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
