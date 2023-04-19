import { useState } from "react";
import { sendCreateUser, sendEditedUser } from "../Services/usuarioServices";
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

  return {
    isLoading,
    data,
    isError,
    createUser,
    editUser,
  };
};
