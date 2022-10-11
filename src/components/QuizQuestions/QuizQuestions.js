import React, { useState } from "react";

const QuizQuestions = ({ ques }) => {
  const { question, options, id, correctAnswer } = ques;
  const [answer, setAnswer] = useState();

  const getCorrectAnswer = (e) => {
    setAnswer(e.target.value);
  };
  let message;
  if (answer === correctAnswer) {
    message = <p>Correct Answer</p>;
  }

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
            onClick={getCorrectAnswer}
          ></input>
          <label>{result}</label>
        </div>
      ))}
      {message}
      {/* <p>{answer}</p> */}
    </div>
  );
};

export default QuizQuestions;
