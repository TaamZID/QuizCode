import React from "react";
import "./Topic.css";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { logo, name, id } = topic;
  return (
    <div className="topic-container">
      <img src={logo} alt="" className="logo" />
      <div className="nb">
        <p>{name}</p>
        <button><Link to={`/quiz/${id}`}>Start Practice</Link></button>
      </div>
    </div>
  );
};

export default Topic;

// onClick={() => handleQuizDetails(id)}