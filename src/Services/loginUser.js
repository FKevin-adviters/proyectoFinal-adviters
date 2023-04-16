import { fetchContent } from "../Utils/fetchContent";
import CryptoJS from "crypto-js";

let key_secreta = "holasoylakeysecreta";

export const loginUser = async (user) => {
  let options = {
    method: "POST",
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  };
  try {
    return await fetchContent("login", options);
  } catch (error) {
    throw new Error("[loginUser service error]: " + error);
  }
};

export const checkLocalStorageAndToken = async () => {
  try {
    const cachedToken = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : false;
    let cachedUser = localStorage.getItem("userEncrypted")
      ? localStorage.getItem("userEncrypted")
      : false;
    if (cachedToken && cachedUser) {
      let options = {
        token: cachedToken,
      };
      console.log(options);
      return await fetchContent("/token", options);
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const sendEncryptUserToLS = (user) => {
  let encryptedUser = CryptoJS.AES.encrypt(
    JSON.stringify(user),
    key_secreta
  ).toString();
  localStorage.setItem("userEncrypted", encryptedUser);
};

export const getDecryptedUserFromLS = () => {
  let userEncrypted = localStorage.getItem("userEncrypted")
    ? localStorage.getItem("userEncrypted")
    : false;

  if (userEncrypted) {
    let bytes = CryptoJS.AES.decrypt(userEncrypted, key_secreta);
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }

  return userEncrypted;
};
