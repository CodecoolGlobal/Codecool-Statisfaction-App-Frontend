import axios from "../Axios/axios";

export async function GetFeedbacks() {
  let result = await axios.post("/feedback/month", {
    tokenId: localStorage.getItem("tokenId"),
  });
  if (result.status === 200) {
    return result.data;
  } else if (result.status === 204) {
    return null;
  }
  console.log(result);
}

export async function GetFeedback(id) {
  let result = await axios.get(`/feedback/${id}`);
  if (result.status === 200) {
    return result.data;
  }
  return null;
}

export async function Vote(feedbackId) {
  let result = await axios.put(`/feedback/${feedbackId}/vote`, {
    feedbackId: feedbackId,
    tokenId: localStorage.getItem("tokenId"),
  });
  if (result.status !== 200) {
    console.log(result);
    return false;
  }
  return true;
}

export async function PostFeedback(feedback) {
  let result = await axios.post("/feedback", {
    tokenId: localStorage.getItem("tokenId"),
    title: feedback.title,
    anonymus: feedback.anonymus,
  });
  if (result.status !== 201) {
    console.log(result.statusText);
  }
  return result.data;
}
