import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Home.css";
import image from "../../images/download.png";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <h2 className="text">Frontend Development Quiz!</h2>
      <img src={image} alt="" />
      <div className="home-container">
        {data.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;

// handleQuizDetails={handleQuizDetails}
