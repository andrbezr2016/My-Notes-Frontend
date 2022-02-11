import axios from "axios";
import router from "./router";
import "./axios";



function setToken(response) {
  sessionStorage.setItem("token", response.data.token);
  axios.defaults.headers.common["token"] = sessionStorage.getItem("token");
}


// --- Entry ---

export const authenticate = async (form) => {
  try {
    const response = await axios.post("login", form);
    routeNext(response);
  } catch (e) {
    return e.response.data;
  }
};

export const registration = async (form) => {
  try {
    const response = await axios.post("register", form);
    routeNext(response);
  } catch (e) {
    return e.response.data;
  }
};