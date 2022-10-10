import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">QuizCode</Link>
      <Link to="/">Topic</Link>
      <Link to="/statistic">Statistics</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Header;
