import { loginUser, sendEncryptUserToLS } from "../Services/loginUser";
import { useContext, useEffect, useState } from "react";
import { ActionContext } from "../Contexts/ContextProvider";
import { toast } from "react-toastify";

export const useLogin = () => {
  const { setUserData } = useContext(ActionContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();

  const submitLogin = async (user) => {
    try {
      sendEncryptUserToLS(user);
      setIsLoading(true);
      let data = await loginUser(user);
      setIsLoading(false);
      return setData(data);
    } catch (e) {
      setIsError(e.message());
      return toast.error("No ha sido posible loguearse, intente nuevamente");
    }
  };

  useEffect(() => {
    if (data?.user) {
      setUserData(data?.user);
      data?.token
        ? localStorage.setItem("token", JSON.stringify(data?.token))
        : "";

      toast.success("Ha ingresado correctamente", {
        position: "bottom-left",
        toastId: "logInSuccess",
      });
    }
  }, [data]);

  return {
    isLoading,
    submitLogin,
    isError,
  };
};
