import { fetchContent } from "../../../Utils/fetchContent";
import { setQueryParams } from "../../../Utils/setQueryParams";

// Funciones de admin

// get
export const getLicenciasAdm = async (filtro, estado) => {
  try {
    return await fetchContent(`/licencias${setQueryParams(filtro, estado)}`);
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};

// patch
export const setEstadoByIdLicenciaAdm = async (
  idUsuario,
  idLicencia,
  estado
) => {
  let options = {
    method: "PATCH",
    body: { estado, idUsuario, idLicencia },
  };

  try {
    return await fetchContent(
      `/licencias/${idUsuario}/${idLicencia}${setQueryParams(null, estado)}`,
      options
    );
  } catch (error) {
    throw new Error("[setNewLicencia service error]: " + error);
  }
};
