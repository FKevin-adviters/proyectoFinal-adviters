import { fetchContent } from "../../../Utils/fetchContent";
import { setQueryParams } from "../../../Utils/setQueryParams";

// Funciones de admin

// [get]: getLicenciasAdm => recibe todas las licencias sin/con filtro y/o estado
export const getLicenciasAdm = async (filtro, estado) => {
  try {
    return await fetchContent(`/licencias${setQueryParams(filtro, estado)}`);
  } catch (error) {
    throw new Error("[getLicenciasAdm service error]: " + error);
  }
};

// [patch]: updateEstadoByIdLicenciaAdm => actualiza el estado de la licencia a: aprobado, rechazado o pendiente; y campos de la licencia si se necesita.
export const updateEstadoByIdLicenciaAdm = async (
  idUsuario,
  idLicencia,
  estado,
  licencia = {}
) => {
  let options = {
    method: "PATCH",
    body: { estado, idUsuario, idLicencia, licencia },
  };

  try {
    return await fetchContent(
      `/licencias/${idUsuario}/${idLicencia}${setQueryParams(null, estado)}`,
      options
    );
  } catch (error) {
    throw new Error("[updateEstadoByIdLicenciaAdm service error]: " + error);
  }
};
