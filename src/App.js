import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Statistic from "./components/Statistic/Statistic";
import Topic from "./components/Topic/Topic";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: "/topic",
          element: <Topic></Topic>,
        },
        {
          path: "/statistic",
          element: <Statistic></Statistic>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
