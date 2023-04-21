import { useQuery } from "react-query";
import { getFeriados } from "../Services/feriadosServices";

export const useFeriados = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["useFeriados"],
    async () => {
      return getFeriados();
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
