import { fetchContent } from "../Utils/fetchContent";

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
