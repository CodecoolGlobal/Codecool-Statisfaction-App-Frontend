import axios from "../Axios/axios";

export async function getQuestions() {
  let response = await axios.get("/questions");
  return response.data;
}
