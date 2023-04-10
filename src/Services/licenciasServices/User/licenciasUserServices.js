import { fetchContent } from "../../../Utils/fetchContent";

// Funciones de usuario

// [patch]: updateLicenciaByIdUserLog => actualiza los campos de una licencia a través de [idUsuarioLogeado, idLicencia]
export const updateLicenciaByIdUserLog = async (
  idUsuarioLogeado,
  idLicencia,
  cambios
) => {
  let options = {
    method: "PATCH",
    body: { idUsuarioLogeado, idLicencia, cambios },
  };

  try {
    return await fetchContent(
      `/licencias/${idUsuarioLogeado}/${idLicencia}`,
      options
    );
  } catch (error) {
    throw new Error("[updateLicenciaById service error]: " + error);
  }
};
