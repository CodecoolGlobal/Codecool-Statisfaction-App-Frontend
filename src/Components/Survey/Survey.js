import React, { useState, useEffect } from "react";
import "./Survey.css";
import Modal from "react-modal";
import { getQuestions } from "../../Api/QuestionCalls";
import Question from "./Question";
import { ContactsOutlined } from "@material-ui/icons";
import { answers } from "./AnswerGlobals";
import { saveSurvey } from "../../Api/SuvreyCalls";

export default function Survey({ title, date, surveyId, isDone }) {
  Modal.setAppElement("body");
  const [questions, setQuestions] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function FetchQuestions() {
      let result = await getQuestions();
      setQuestions(result);
    }
    FetchQuestions();
  }, []);

  function openModal() {
    createAnswers();
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    console.log(answers);
    if (answers.length > 0) {
      answers.length = 0;
    }
    setIsOpen(false);
  }

  function createAnswers() {
    for (let question of questions) {
      let answer = { surveyId: surveyId, questionId: question.id, value: 0 };
      answers.push(answer);
    }
  }

  const setAnswerValue = (questionId, value) => {
    console.log("hallo");
    let answer = answers.find((a) => a.questionId === questionId);
    answer.value = value;
  };

  const sendAnswers = () => {
    saveSurvey(surveyId, answers);
    console.log(answers);
    closeModal();
  };

  return (
    <div
      className={`survey-container ${!isDone && "survey-container--isDone"}`}
      onClick={openModal}
    >
      <div className="survey-name">{title}</div>
      <div className="survey-date">{date}</div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Survey"
        >
          <div className="modal-container">
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              <div className="modal-date">{date}</div>
            </div>
            <div className="modal-body">
              {questions.map((question) => {
                return (
                  <Question
                    key={question.id}
                    question={question}
                    setAnswer={setAnswerValue}
                  />
                );
              })}
            </div>
            <div className="modal-footer">
              <button className="modal-button-save" onClick={sendAnswers}>
                Save
              </button>
              <button className="modal-button-close" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

const customStyles = {
  content: {
    padding: "0.5%",
    backgroundColor: "rgb(255, 255, 109)",
    borderRadius: "10px",
    width: "70%",
    height: "90%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid rgba(156, 156, 156, 0.2)",
  },
};
