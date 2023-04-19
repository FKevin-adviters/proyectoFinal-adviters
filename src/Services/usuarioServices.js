import { fetchContent } from "../Utils/fetchContent";

export const sendCreateUser = async (user) => {
  let token = sessionStorage.getItem("token");
  try {
    let options = {
      headers: { token },
      method: "POST",
      body: { ...user },
    };
    let data = await fetchContent("/usuario", options);
    return data;
  } catch (error) {
    throw new Error("No se ha podido crear el usuario: " + error?.message);
  }
};

export const sendEditedUser = async (userData, id) => {
  let token = sessionStorage.getItem("token");
  try {
    let options = {
      headers: { token },
      method: "PUT",
      body: { ...userData },
    };
    let data = await fetchContent("/usuario/" + id, options);
    return data;
  } catch (error) {
    throw new Error("No se ha podido crear el usuario: " + error?.message);
  }
};
