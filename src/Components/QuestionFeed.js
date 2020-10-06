import React from "react";
import "../Components/QuestionFeed.css";
import PageHeader from "./PageHeader/PageHeader";
import Survey from "./Survey/Survey";

function QuestionFeed() {
  return (
      <div className="survey-feed-container">
      <PageHeader title={"Surveys"} />
        <Survey title="Weekly survey 01" date="01.10.2020" isDone />
        <Survey title="Weekly survey 02" date="28.09.2020" isDOne="false" />
        <Survey title="Weekly survey 03" date="23.09.2020" isDOne="false" />
      </div>
  );
}

export default QuestionFeed;
