import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestions from "../QuizQuestions/QuizQuestions";

const Quiz = () => {
  const { data } = useLoaderData();
  console.log(data);
  
  return (
    <div>
      <h2>Quiz of {data.name}</h2>
      <div>
        {data.questions.map((ques) => (
          <QuizQuestions
            key={ques.id}
            ques={ques}
          ></QuizQuestions>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
