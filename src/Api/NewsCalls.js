import Axios from "axios";

export async function getNews() {
  let result = await Axios.get("/news");
  if (result.status === 200) return result.data;
  return null;
}
