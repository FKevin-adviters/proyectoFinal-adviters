import axios from "axios";
const httpClient = axios.create({
  baseURL: "http://localhost:8080/api",
});
export const Method = {
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  POST: "POST",
  DELETE: "DELETE",
};

export const login = async (user) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const request = {
    method: Method.POST,
    headers,
    url: "/login",
    user,
  };

  const promise = httpClient.request(request);
  const {
    data: { token },
  } = await promise;
  return token;
};

export const fetchContent = async (url, config = {}) => {
  try {
    const { headers: headersOptions, token } = config;
    console.log(token);
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          ...headersOptions,
        }
      : {
          "Content-Type": "application/json",
          ...headersOptions,
        };

    const { body, ...options } = config;
    const source = axios.CancelToken.source();
    const request = {
      cancelToken: source.token,
      method: Method.GET,
      headers,
      ...options,
      url,
    };
    if (body) {
      request.data = body;
      console.log(body);
    }
    const promise = httpClient.request(request);
    promise.cancel = () => source.cancel("cancelled");
    const { data } = await promise;
    if (data?.error) {
      throw new Error(data.error);
    }
    return data;
    // return camelcaseKeys(data, { deep: true });
  } catch (error) {
    console.info(error);
    throw error;
  }
};
