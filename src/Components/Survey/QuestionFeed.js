import React, { useState, useEffect } from "react";
import "./QuestionFeed.css";
import PageHeader from "../PageHeader/PageHeader";
import Survey from "./Survey";
import { getSurveys } from "../../Api/SuvreyCalls";

function QuestionFeed() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    async function FetchSurveys() {
      let result = await getSurveys();
      if (result) {
        setSurveys(result);
      }
    }
    FetchSurveys();
  }, []);

  return (
    <div className="survey-feed-container">
      <PageHeader title={"Surveys"} />
      {surveys.map((s) => {
        return (
          <Survey
            key={s.id}
            title={s.title}
            date={s.date}
            surveyId={s.id}
            isDone={s.filledAlready}
          />
        );
      })}
      ;
    </div>
  );
}

export default QuestionFeed;
