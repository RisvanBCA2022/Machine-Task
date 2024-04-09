import axios from "axios";

const createAxiosInstance = (cookies) => {
  const instance = axios.create({
    baseURL: "https://interview-plus.onrender.com/api",
    timeout: 5000,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = cookies?.userToken;
      if (token) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance;
