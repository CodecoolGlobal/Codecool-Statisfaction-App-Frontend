import React from "react";
import "../Components/QuestionFeed.css";
import PageHeader from "./PageHeader/PageHeader";
import Survey from "./Survey/Survey";

function QuestionFeed() {
  return (
    <div className="wall">
      <PageHeader title={"QuestionFeed"} />
      <div className="survey-feed-container">
        <Survey title="Weekly survery 01" date="01.10.2020" isDone />
        <Survey title="Weekly survery 02" date="28.09.2020" isDOne="false" />
        <Survey title="Weekly survery 03" date="23.09.2020" isDOne="false" />
      </div>
    </div>
  );
}

export default QuestionFeed;
