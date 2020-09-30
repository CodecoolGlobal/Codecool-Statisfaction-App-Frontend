import React from "react";
import "../Components/QuestionFeed.css";
import PageHeader from "./PageHeader/PageHeader";

function QuestionFeed() {
  return (
    <div className="wall">
      <PageHeader title={"QuestionFeed"} />
      <div>
        <h2>QuestionFeed</h2>
      </div>
    </div>
  );
}

export default QuestionFeed;
