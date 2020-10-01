import React, { useState, useEffect } from "react";
import "./Survey.css";
import Modal from "react-modal";
import { getQuestions } from "../../Api/QuestionCalls";

export default function Survey({ title, date, isDone }) {
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
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      className={`survey-container ${!isDone && "survey-container--isDone"}`}
      onClick={openModal}
    >
      <div className="survey-name">{title}</div>
      <div className="survey-date">{date}</div>
      <div onClick={(e) => e.stopPropagation()}>
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
                  <p key={question.id} style={{ padding: "1%" }}>
                    {question.title}
                  </p>
                );
              })}
            </div>
            <div className="modal-footer">
              <button className="modal-button-save" onClick={closeModal}>
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
