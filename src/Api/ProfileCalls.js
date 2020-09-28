import axios from "../Axios/axios";

export async function getCourses() {
  let response = await axios.get("/profile/courses");
  return response.data;
}

export async function getUserData() {
  let response = await axios.post("/profile", {
    tokenId: localStorage.getItem("tokenId"),
  });
  return response.data;
}
