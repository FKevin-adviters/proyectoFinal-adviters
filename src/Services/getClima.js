import axios from "axios";

export const getClima = async () => {
  let apikey = "7fccf964410c688f356c391b886514d4";

  try {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=${apikey}&units=metric&lang=sp,%20es`
    );
    return res.data;
  } catch (error) {
    throw new Error("[getClima service error]: " + error);
  }
};
