import { fetchContent } from "../../../Utils/fetchContent";
import { setQueryParams } from "../../../Utils/setQueryParams";
// Funciones de ambos

// [post]: setLicenciaByIdUser => Ambos roles pueden crear una licencia para cualquier usuario
export const setLicenciaByIdUser = async (idUsuario, licencia) => {
  let options = {
    method: "POST",
    body: { idUsuario, licencia },
  };

  try {
    return await fetchContent(`/licencias/${idUsuario}`, options);
  } catch (error) {
    throw new Error("[setLicenciaByIdUser service error]: " + error);
  }
};

// [get]: getLicenciasByIdUser => Obtiene todas las licencias de un usuario sin/con filtros y/o estado
// Rol admin: lo puede utilizar para cualquier usuario
// Rol user: solo para él mismo
export const getLicenciasByIdUser = async (idUsuario, filtro, estado) => {
  try {
    return await fetchContent(
      `/licencias/${idUsuario}${setQueryParams(filtro, estado)}`
    );
  } catch (error) {
    throw new Error("[getLicenciasByIdUser service error]: " + error);
  }
};

// [delete]: deleteLicenciaByIdUser => Elimina cualquier licencia de un usuario a través de su [idUsuario, idLicencia]
// Rol admin: tendrá acceso a borrar las licencias de todos los usuarios
// Rol user: tendrá acceso a borrar sus licencias
export const deleteLicenciaByIdUser = async (idUsuario, idLicencia) => {
  let options = {
    method: "DELETE",
    body: { idUsuario, idLicencia },
  };
  try {
    return await fetchContent(
      `/licencias/${idUsuarioLogeado}/${idLicencia}`,
      options
    );
  } catch (error) {
    throw new Error("[deleteLicenciaByIdAdm service error]: " + error);
  }
};
