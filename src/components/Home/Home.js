import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Home.css";

const Home = () => {
  const { data } = useLoaderData();

  const handleQuizDetails = (id) => {
    console.log(id);
  };

  return (
    <div className="home-container">
      {data.map((topic) => (
        <Topic
          key={topic.id}
          topic={topic}
          handleQuizDetails={handleQuizDetails}
        ></Topic>
      ))}
    </div>
  );
};

export default Home;
