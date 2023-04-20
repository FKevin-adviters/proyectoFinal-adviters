import moment from "moment";
import { fetchContent } from "../Utils/fetchContent";

export const createLicencia = async (licencia) => {
  licencia.startDate = moment(licencia.startDate).toISOString();
  licencia.endDate = moment(licencia.endDate).toISOString();
  let token = JSON.parse(sessionStorage.getItem("token"));
  let arr = token.split(" ");
  console.log(arr[1]);
  try {
    let options = {
      headers: {
        token: arr[1],
      },
      method: "POST",
      body: {
        ...licencia,
        tipoLicencia: {
          licenseId: licencia.tipoLicencia,
        },
        estadoLicencia: {
          idState: 0,
        },
      },
    };
    let data = await fetchContent(
      "/licencias/usuario/" + licencia.licenseUser,
      options
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se ha logrado crear la licencia");
  }
};
