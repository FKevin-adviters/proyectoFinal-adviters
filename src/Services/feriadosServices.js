import { fetchContent } from "../Utils/fetchContent";

export const getFeriados = async () => {
  try {
    return await fetchContent("/feriados");
  } catch (error) {
    throw new Error("[getFeriados service error]: " + error);
  }
};
