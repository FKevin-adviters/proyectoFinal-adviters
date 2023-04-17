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

export const checkSessionStorageAndToken = async () => {
  try {
    const cachedToken = sessionStorage.getItem("token")
      ? JSON.parse(sessionStorage.getItem("token"))
      : false;
    let cachedUser = sessionStorage.getItem("userEncrypted")
      ? sessionStorage.getItem("userEncrypted")
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

export const sendEncryptUserToSS = (user) => {
  let encryptedUser = CryptoJS.AES.encrypt(
    JSON.stringify(user),
    key_secreta
  ).toString();
  sessionStorage.setItem("userEncrypted", encryptedUser);
};

export const getDecryptedUserFromSS = () => {
  let userEncrypted = sessionStorage.getItem("userEncrypted")
    ? sessionStorage.getItem("userEncrypted")
    : false;

  if (userEncrypted) {
    let bytes = CryptoJS.AES.decrypt(userEncrypted, key_secreta);
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }

  return userEncrypted;
};
