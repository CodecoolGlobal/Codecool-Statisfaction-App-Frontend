import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import QuestionFeed from "../Components/QuestionFeed";
import "../Pages/QuestionsPage.css";
import InfoBar from "../Components/InfoBar/InfoBar";

function QuestionsPage() {
  return (
    <div className="app">
      <Sidebar />
      <QuestionFeed />
      <InfoBar />
    </div>
  );
}

export default QuestionsPage;
