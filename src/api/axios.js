import axios from "axios";
import router from "../router";
import { setToken, getAccessToken, getRefreshToken } from "../storage";

// Default settings
axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.headers.common["Token"] = getAccessToken();

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    if (
      config.url !== `/auth/login` &&
      config.url !== `/auth/registration` &&
      !config.headers.common.Token
    ) {
      router.push("/login");
      return;
    }
    return config;
  },
  (error) => {
    throw error;
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 && !error.config._retry) {
      error.config._retry = true;
      const refreshToken = getRefreshToken();
      return resetToken(refreshToken, error.config);
    }
    throw error;
  }
);

const resetToken = async (refreshToken, retryConfig) => {
  try {
    const response = await axios.get(
      `/auth/token?refreshToken=${refreshToken}`
    );
    setToken(response.data);
    axios.defaults.headers.common["Token"] = getAccessToken();
    retryConfig.headers.Token = getAccessToken();
    return axios(retryConfig);
  } catch (e) {
    router.push("/login");
  }
};
