import { fetchContent } from "../Utils/fetchContent";




export const getFeriados = async (date, description) => {

  let token = JSON.parse(sessionStorage.getItem("token"));

  let arr = token.split(" ")

  let options = {

    token: arr[1],

  };

  try {

    const res = await fetchContent(

      `/feriados`,

      options

    );

    return res;

  } catch {

    throw new Error("No se han encontrado Feriados");

  }

};