import React, { useState } from "react";
import "./Question.css";

export default function Question({ question, setAnswer }) {
  const [answerValue, setAnswerValue] = useState(3);

  return (
    <div className="question-container">
      <div className="question-description">{question.title}</div>
      <div className="answer-container">
        <div
          value={1}
          className="answer-option"
          onClick={() => {
            setAnswerValue(1);
            setAnswer(question.id, 1);
            console.log(answerValue);
          }}
        >
          1
        </div>
        <div
          className="answer-option"
          value={2}
          onClick={() => {
            setAnswerValue(2);
            setAnswer();
            console.log(answerValue);
          }}
        >
          2
        </div>
        <div
          className="answer-option"
          value={3}
          onClick={() => {
            setAnswerValue(3);
            console.log(answerValue);
          }}
        >
          3
        </div>
        <div
          className="answer-option"
          value={4}
          onClick={() => {
            setAnswerValue(4);
            console.log(answerValue);
          }}
        >
          4
        </div>
        <div
          className="answer-option"
          value={5}
          onClick={() => {
            setAnswerValue(5);
            console.log(answerValue);
          }}
        >
          5
        </div>
      </div>
    </div>
  );
}
