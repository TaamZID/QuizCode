import React from "react";

const QuizQuestions = ({ ques }) => {
  const { question, options, id } = ques;
  return (
    <div>
      {<h3>{question}</h3>}
      {options.map((result) => (
        <div>
          <input type="radio" name={id}></input>
          <label>{result}</label>
        </div>
      ))}
    </div>
  );
};

export default QuizQuestions;
