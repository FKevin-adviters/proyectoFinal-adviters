import { useQuery } from "react-query";
import { getClima } from "../Services/climaServices";

export const useClima = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["useClima"],
    async () => {
      return getClima();
    }
  );

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
