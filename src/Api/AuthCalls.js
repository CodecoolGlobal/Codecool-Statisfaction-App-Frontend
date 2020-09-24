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
    tokenId: localStorage.getItem("tokenId"),
  });
  if (statusResponse.status === 200) {
    localStorage.removeItem("tokenId");
    return true;
  }
  return false;
}
