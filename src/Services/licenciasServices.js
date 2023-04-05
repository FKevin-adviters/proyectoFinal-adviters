import { fetchContent } from "../Utils/fetchContent";

export const getLicencias = async (id) => {
  try {
    return await fetchContent(`/licencias${id ? "/" + id : ""}`);
  } catch (error) {
    throw new Error("[getLicencias service error]: " + error);
  }
};
