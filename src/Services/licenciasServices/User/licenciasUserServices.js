import { fetchContent } from "../../../Utils/fetchContent";
import { setQueryParams } from "../../../Utils/setQueryParams";

// Funciones de usuario

// get
export const getLicenciasByIdUsuario = async (idUsuario, filtro, estado) => {
  try {
    return await fetchContent(
      `/licencias/${idUsuario}${setQueryParams(filtro, estado)}`
    );
  } catch (error) {
    throw new Error("[getLicenciasById service error]: " + error);
  }
};
