import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Statistic from "./components/Statistic/Statistic";
import Topic from "./components/Topic/Topic";
import Main from "./layouts/Main";
import ShowStatistic from "./ShowStatistic/ShowStatistic";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/topic",
          element: <Topic></Topic>,
        },
        {
          path: "/statistic",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistic></Statistic>,
        },
        {
          path: "/showStatistic",
          element: <ShowStatistic></ShowStatistic>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quiz></Quiz>,
        },
      ],
    },
    { path: "*", element: <div>404 PAGE NOT FOUND!</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
