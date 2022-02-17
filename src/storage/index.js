export function setToken(data) {
  sessionStorage.setItem("accessToken", data.accessToken);
  sessionStorage.setItem("refreshToken", data.refreshToken);
}

export function getAccessToken() {
  return sessionStorage.getItem("accessToken");
}

export function getRefreshToken() {
  return sessionStorage.getItem("refreshToken");
}

export function removeToken() {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
}
