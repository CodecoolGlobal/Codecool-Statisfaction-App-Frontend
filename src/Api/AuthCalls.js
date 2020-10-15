import axios from "../Axios/axios";

export async function getClientId() {
  let response = await axios.get("/login");
  return response.data;
}

export async function login(response) {
  let userData = await axios.post("/login", { tokenId: response.tokenId });
  return userData;
}

export async function logout() {
  let statusResponse = await axios.post("/logout", {
    tokenId: window.sessionStorage.getItem("tokenId"),
  });
  if (statusResponse.status === 200) {
    window.sessionStorage.removeItem("tokenId");
    return true;
  }
  return false;
}

export async function isAdmin() {
  if (!window.sessionStorage.getItem("tokenId")) return false;
  let response = await axios.post("/admins/isadmin", {
    tokenId: window.sessionStorage.getItem("tokenId"),
  });
  if (response.status === 200) return true;
  return false;
}

export async function addAdmin(email) {
  let response = await axios.post("/admins", {
    tokenId: window.sessionStorage.getItem("tokenId"),
    email: email,
  });
  if (response.status === 201) return true;
  return false;
}
