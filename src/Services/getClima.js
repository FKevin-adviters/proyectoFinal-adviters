import axios from "axios";

export const getClima = async () => {
  let apikey = "0277cfe854bd41509f8144100230604";

  try {
    let res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=Buenos%20Aires&aqi=no&lang=es`
    );
    return res.data;
  } catch (error) {
    throw new Error("[getClima service error]: " + error);
  }
};
