import { fetchContent } from "../../../Utils/fetchContent";

// Funciones de ambos

// post
export const setLicenciaByIdUsuario = async (idUsuario, licencia) => {
  let options = {
    body: licencia,
    method: "POST",
  };
  try {
    return await fetchContent(`/licencias/${idUsuario}`, options);
  } catch (error) {
    throw new Error("[setNewLicencia service error]: " + error);
  }
};

// patch
export const updateLicenciaById = async (idLicencia, idUsuario, licencia) => {
  let options = {
    body: licencia,
    method: "PATCH",
  };
  try {
    return await fetchContent(`/licencias/${idUsuario}/${idLicencia}`, options);
  } catch (error) {
    throw new Error("[updateLicenciaById service error]: " + error);
  }
};
