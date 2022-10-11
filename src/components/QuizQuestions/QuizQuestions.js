import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // if (answer === correctAnswer) {
  //   // message = <p>Correct Answer</p>;
  // }

  return (
    <div>
      {<h3>{question}</h3>}
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
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer position="top-center" duration={3000} />
    </div>
  );
};

export default QuizQuestions;
