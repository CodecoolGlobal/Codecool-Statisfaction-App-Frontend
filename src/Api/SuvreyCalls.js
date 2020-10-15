import axios from "../Axios/axios";

export async function saveSurvey(surveyId, answers) {
  let tokenId = localStorage.getItem("tokenId");
  let result = await axios.post(`/surveys/fill/${surveyId}`, {
    tokenId: tokenId,
    surveyId: surveyId,
    answers: answers,
  });
  if (result.status === 200) return true;

  console.log(result);
  return false;
}

export async function getSurveys() {
  let tokenId = localStorage.getItem("tokenId");
  let response = await axios.post("/surveys", { tokenId });
  return response.data;
}
