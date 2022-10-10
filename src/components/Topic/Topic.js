import React from "react";
import "./Topic.css";

const Topic = ({ topic, handleQuizDetails }) => {
  const { logo, name, id } = topic;
  return (
    <div className="topic-container">
      <img src={logo} alt="" className="logo" />
      <div className="nb">
        <p>{name}</p>
        <button onClick={() => handleQuizDetails(id)}>Start Practice</button>
      </div>
    </div>
  );
};

export default Topic;
