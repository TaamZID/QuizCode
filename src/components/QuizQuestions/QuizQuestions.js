import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./QuizQuestions.css";

const QuizQuestions = ({ ques }) => {
  const { question, options, id, correctAnswer } = ques;
  const [answer, setAnswer] = useState([]);
  let message;

  const notify = () => {
    if (answer !== correctAnswer) {
      toast.error("Wrong Answer!");
    } else {
      toast.success("Correct Answer!");
    }
  };

  const getCorrectAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const showCorrectAnswer = () => {
    toast.success(
      <div>
        Correct Answer: <b>{correctAnswer}</b>
      </div>
    );
  };

  // if (answer === correctAnswer) {
  //   // message = <p>Correct Answer</p>;
  // }

  return (
    <div>
      <div className="head">
        {
          <h3>
            {question
              .replace("<p>", "")
              .replace("</p>", "")
              .replace("&nbsp;", "")
              .replace("&nbsp;&nbsp;", "")}
          </h3>
        }
        <FontAwesomeIcon
          className="eye"
          icon={faEye}
          onClick={showCorrectAnswer}
        />
      </div>
      {options.map((result) => (
        <div>
          <input
            type="radio"
            key={result.id}
            name={id}
            value={result}
            onClick={notify}
            onChange={getCorrectAnswer}
          ></input>
          <label>{result}</label>
        </div>
      ))}
      {message}
      <ToastContainer position="top-center" duration={3000} />
    </div>
  );
};

export default QuizQuestions;
