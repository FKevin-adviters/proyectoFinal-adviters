import { useState } from "react";
import {
  getAllUsers,
  sendCreateUser,
  sendEditedUser,
} from "../Services/usuarioServices";
import { toast } from "react-toastify";

export const useUsuario = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState();

  const createUser = async (userData) => {
    try {
      let data = await sendCreateUser(userData);
      return data;
    } catch (error) {
      console.log(error);
      setIsError(true);
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
      setIsError(true);
      toast.error("No se ha logrado crear el usuario, revise los campos", {
        toastId: "created-user-error",
      });
    }
  };

  const getUsers = async () => {
    try {
      let data = await getAllUsers();
      return setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    isLoading,
    data,
    isError,
    createUser,
    editUser,
    getUsers,
  };
};
