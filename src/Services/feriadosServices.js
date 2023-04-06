import { fetchContent } from "../Utils/fetchContent";

export const getFeriados = async () => {
  try {
    return fetchContent("feriados");
  } catch (error) {
    throw new Error("[getClima service error]: " + error);
  }
};
