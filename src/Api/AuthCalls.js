import axios from "../Axios/axios";

export async function getClientId() {
  let response = await axios.get("/login");
  return response.data;
}

export async function login(response) {
  let userData = await axios.post("/login", { tokenId: response.tokenId });
  return userData;
}
