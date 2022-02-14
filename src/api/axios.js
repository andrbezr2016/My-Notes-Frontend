import axios from "axios";
import router from "../router";

// Default settings
axios.defaults.baseURL = "http://localhost:8081/";
axios.defaults.headers.common["Token"] = sessionStorage.getItem("accessToken");

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      const refreshToken = sessionStorage.getItem("refreshToken");
      resetToken(refreshToken);
    }
    throw error;
  }
);

async function resetToken(refreshToken) {
  try {
    console.log(refreshToken);
    const response = await axios.get("auth/token", {
      params: {
        refreshToken: refreshToken,
      },
    });
    setToken(response);
  } catch (error) {
    router.push("/login");
  }
}

export function setToken(response) {
  sessionStorage.setItem("accessToken", response.data.accessToken);
  sessionStorage.setItem("refreshToken", response.data.refreshToken);
  axios.defaults.headers.common["Token"] =
    sessionStorage.getItem("accessToken");
}
