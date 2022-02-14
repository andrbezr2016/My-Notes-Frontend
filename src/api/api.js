import axios from "axios";
import router from "../router";
import "./axios";
import { setToken } from "./axios";

// Requests

export const login = async (data) => {
  try {
    const response = await axios.post("auth/login", data);
    setToken(response);
    router.push("/home");
  } catch (e) {
    return e.response.data;
  }
};

export const registration = async (data) => {
  try {
    await axios.post("auth/registration", data);
    router.push("/login");
  } catch (e) {
    return e.response.data;
  }
};

export const logout = async () => {
  try {
    await axios.post("auth/logout");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    router.push("/login");
  } catch (e) {
    return e.response.data;
  }
};
