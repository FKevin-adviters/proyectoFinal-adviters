import { loginUser, sendEncryptUserToSS } from "../Services/loginUser";
import { useContext, useEffect, useState } from "react";
import { ActionContext } from "../Contexts/ContextProvider";
import { toast } from "react-toastify";

export const useLogin = () => {
  const { setUserData } = useContext(ActionContext);
  const [data, setData] = useState();

  const submitLogin = async (user) => {
    try {
      sendEncryptUserToSS(user);
      let data = await loginUser(user);
      return setData(data);
    } catch (e) {
      throw new Error("No ha sido posible loguearse, intente nuevamente");
    }
  };

  useEffect(() => {
    if (data?.user) {
      setUserData(data?.user);
      data?.token
        ? sessionStorage.setItem("token", JSON.stringify(data?.token))
        : "";

      toast.success("Ha ingresado correctamente", {
        position: "bottom-left",
        toastId: "logInSuccess",
      });
    }
  }, [data]);

  return {
    submitLogin,
  };
};
