import { useQuery } from "react-query";
import { getFeriados } from "../Services/feriadosServices";

export const useFeriados = (id) => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["useFeriados", id || ""],
    async () => {
      return getFeriados(id || "");
    }
  );

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
  };
};
