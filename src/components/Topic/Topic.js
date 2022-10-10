import React from "react";

const Topic = ({ topic }) => {
  const { logo, name } = topic;
  return (
    <div>
      <img src={logo} alt="" className="logo" />
      <div className="nb">
        <p>
          <small>{name}</small>
        </p>
        <button>Start Practice</button>
      </div>
    </div>
  );
};

export default Topic;
