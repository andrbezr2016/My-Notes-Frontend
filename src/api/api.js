import axios from "axios";
import "./axios";
import { setToken, getAccessToken, removeToken } from "../storage";

// Requests Auth
export const login = async (data, okCallback, errorCallback) => {
  try {
    const response = await axios.post(`/auth/login`, data);
    setToken(response.data);
    axios.defaults.headers.common["Token"] = getAccessToken();
    okCallback();
  } catch (e) {
    return errorCallback(e);
  }
};

export const registration = async (data, okCallback, errorCallback) => {
  try {
    await axios.post(`/auth/registration`, data);
    okCallback();
  } catch (e) {
    return errorCallback(e);
  }
};

export const logout = async (finalCallback) => {
  try {
    await axios.post(`/auth/logout`);
  } catch (e) {
    return e;
  } finally {
    removeToken();
    finalCallback();
  }
};

// Requests Users
export const getCurrentUser = async (okCallback) => {
  try {
    const response = await axios.get(`/user`);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};

export const editCurrentUser = async (
  data,
  icon,
  okCallback,
  errorCallback
) => {
  const formData = new FormData();
  const jsonPart = new Blob([JSON.stringify(data)], {
    type: "application/json",
  });
  formData.append("data", jsonPart);
  formData.append("icon", icon);
  try {
    const response = await axios.patch(`/user`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    okCallback(response.data);
  } catch (e) {
    return errorCallback(e);
  }
};

// Requests Categories
export const getUserCategories = async (okCallback) => {
  try {
    const response = await axios.get(`/categories`);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};

export const addCategory = async (data, okCallback) => {
  try {
    const response = await axios.post(`/categories`, data);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};

export const editCategory = async (categoryId, data, okCallback) => {
  try {
    const response = await axios.patch(`/categories/${categoryId}`, data);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};

export const deleteCategory = async (categoryId, okCallback) => {
  try {
    const response = await axios.delete(`/categories/${categoryId}`);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};

// Requests Notes
export const getUserNotes = async (categoryId, okCallback) => {
  try {
    const response = await axios.get(`/notes?categoryId=${categoryId}`);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};

export const addNote = async (data, okCallback) => {
  try {
    const response = await axios.post(`/notes`, data);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};

export const editNote = async (noteId, data, okCallback) => {
  try {
    const response = await axios.patch(`/notes/${noteId}`, data);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};

export const deleteNote = async (noteId, okCallback) => {
  try {
    const response = await axios.delete(`/notes/${noteId}`);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};

export const restoreNote = async (noteId, okCallback) => {
  try {
    const response = await axios.post(`/notes/${noteId}`);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};

export const getDeletedUserNotes = async (okCallback) => {
  try {
    const response = await axios.get(`/notes/deleted`);
    okCallback(response.data);
  } catch (e) {
    return e;
  }
};
