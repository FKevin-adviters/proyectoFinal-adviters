import { fetchContent } from "../Utils/fetchContent";

export const sendCreateUser = async (user) => {
  let token = JSON.parse(sessionStorage.getItem("token"));
  let arr = token.split(" ");

  try {
    let options = {
      headers: { token: arr[1] },
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
      headers: { token: arr[1] },
      method: "PUT",
      body: { ...userData },
    };
    let data = await fetchContent("/usuario/" + id, options);
    return data;
  } catch (error) {
    throw new Error("No se ha podido crear el usuario: " + error?.message);
  }
};

export const getAllUsers = async () => {
  let token = JSON.parse(sessionStorage.getItem("token"));
  let arr = token.split(" ");

  try {
    let options = {
      headers: {
        token: arr[1],
      },
    };
    let data = await fetchContent("/usuario", options);
    return data;
  } catch (error) {
    throw new Error("No se han encontrado usuarios: " + error?.message);
  }
};

export const getAllUsersByRole = async () => {
  let token = JSON.parse(sessionStorage.getItem("token"));
  let arr = token.split(" ");

  try {
    let options = {
      headers: {
        token: arr[1],
      },
    };
    let data = await fetchContent("/usuario/roles", options);
    return data;
  } catch (error) {
    throw new Error("No se han encontrado usuarios: " + error?.message);
  }
};

export const getUserById = async (idUser) => {
  let token = JSON.parse(sessionStorage.getItem("token"));
  let arr = token.split(" ");
  try {
    let options = {
      headers: {
        token: arr[1],
      },
    };
    let data = await fetchContent("/usuario/" + idUser, options);
    return data;
  } catch (error) {
    throw new Error("No se ha encontrado el usuario: " + error?.message);
  }
};
