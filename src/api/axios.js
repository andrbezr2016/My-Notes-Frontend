import axios from "axios";
import router from "../router";
import {
  setToken,
  getAccessToken,
  getRefreshToken,
  removeToken,
} from "../storage";

// Default settings
axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.headers.common["Token"] = getAccessToken();

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    if (
      config.url !== `/auth/login` &&
      config.url !== `/auth/registration` &&
      !config.headers.common["Token"]
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

let isRefreshing = false;
let requestsQueue = [];

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const requestConfig = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !requestConfig._retry
    ) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          requestsQueue.push({ resolve, reject });
        })
          .then((accessToken) => {
            requestConfig.headers["Token"] = accessToken;
            return axios(requestConfig);
          })
          .catch((e) => {
            return Promise.reject(e);
          });
      }
      requestConfig._retry = true;
      isRefreshing = true;
      const refreshToken = getRefreshToken();
      return resetToken(refreshToken, requestConfig);
    }
    return error;
  }
);

const resetToken = async (refreshToken, requestConfig) => {
  try {
    const response = await axios.get(
      `/auth/token?refreshToken=${refreshToken}`
    );
    setToken(response.data);
    axios.defaults.headers.common["Token"] = getAccessToken();
    requestConfig.headers["Token"] = getAccessToken();
    processRequestsQueue(null, getAccessToken());
    return axios(requestConfig);
  } catch (e) {
    processRequestsQueue(e, null);
    removeToken();
    router.push("/login");
    console.log(e);
  } finally {
    isRefreshing = false;
  }
};

const processRequestsQueue = (error, accessToken) => {
  requestsQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(accessToken);
    }
  });
  requestsQueue = [];
};
