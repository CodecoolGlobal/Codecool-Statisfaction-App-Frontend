import axios from "../Axios/axios";

export async function postNews(news) {
  let result = await axios.post("/news", {
    tokenId: window.sessionStorage.getItem("tokenId"),
    description: news.description,
  });
  if (result.status !== 201) {
    console.log(result.statusText);
  }
  console.log(result.data);
  return result.data;
}

export async function getNewsById(newsId) {
  let result = await axios.get(`/news/${newsId}`);
  if (result.status === 200) {
    return result.data;
  }
  return null;
}

export async function getNews() {
  let result = await axios.get("/news");

  if (result != null) {
    return result.data;
  }
  return null;
}
