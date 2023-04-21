import { useContext, useState } from "react";
import {
  getAllUsers,
  getAllUsersByRole,
  sendCreateUser,
  sendEditedUser,
} from "../Services/usuarioServices";
import { toast } from "react-toastify";

export const useUsuario = () => {
  const [data, setData] = useState(null);

  const createUser = async (userData) => {
    try {
      let user = { roles: ["USUARIO"], ...userData };
      let data = await sendCreateUser(user);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("No ha sido posible crear el usuario");
    }
  };

  const editUser = async (userData, userId) => {
    try {
      let data = await sendEditedUser(userData, userId);
      if (data) {
        toast.success("Se ha creado el usuario", { toastId: "created-user" });
      }
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("No ha sido posible editar el usuario");
    }
  };

  const getUsers = async () => {
    try {
      let data = await getAllUsers();
      return setData(data);
    } catch (error) {
      console.log(error);
      throw new Error("No ha sido posible encontrar usuarios");
    }
  };

  const getUsersByRol = async () => {
    try {
      let data = await getAllUsersByRole();
      return setData(data);
    } catch (error) {
      console.log(error);
      throw new Error("No ha sido posible encontrar usuarios por rol");
    }
  };

  return {
    data,
    createUser,
    editUser,
    getUsers,
    getUsersByRol,
  };
};
