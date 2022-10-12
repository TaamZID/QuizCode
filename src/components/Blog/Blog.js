import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <div>
        <h2>Q1. What is the purpose of react router?</h2>
        <p>
          <b>Ans. </b>React Router is a standard library for routing in React.
          It enables the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
      </div>
      <div>
        <h2>Q2. How does Context API works?</h2>
        <p>
          <b>Ans. </b>The React Context API is a way for a React app to
          effectively produce global variables that can be passed around. This
          is the alternative to "prop drilling" or moving props from grandparent
          to child to parent, and so on. Context is also touted as an easier,
          lighter approach to state management using Redux
        </p>
      </div>
      <div>
        <h2>Q3. What is useRef hook?</h2>
        <p>
          <b>Ans. </b>The useRef Hook allows to persist values between renders.
          It can be used to store a mutable value that does not cause a
          re-render when updated. It can be used to access a DOM element
          directly.
        </p>
      </div>
    </div>
  );
};

export default Blog;
