import React, { useState } from "react";
import "./Question.css";

export default function Question({ question }) {
  const [answerValue, setAnswerValue] = useState(3);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="question-container">
      <div className="question-description">{question.title}</div>
      <div className="answer-container">
        <div
          value={1}
          className="answer-option"
          onClick={(event) => {
            setAnswerValue(event.target.value);
            console.log(answerValue);
          }}
        >
          {">:("}
        </div>
        <div
          className="answer-option"
          value={2}
          onClick={() => {
            setAnswerValue(2);

            console.log(answerValue);
          }}
        >
          {":("}
        </div>
        <div
          className="answer-option"
          value={3}
          onClick={() => {
            setAnswerValue(3);
            console.log(answerValue);
          }}
        >
          {":|"}
        </div>
        <div
          className="answer-option"
          value={4}
          onClick={() => {
            setAnswerValue(4);
            console.log(answerValue);
          }}
        >
          {":)"}
        </div>
        <div
          className="answer-option"
          value={5}
          onClick={() => {
            setAnswerValue(5);
            console.log(answerValue);
          }}
        >
          {":D"}
        </div>
      </div>
    </div>
  );
}
