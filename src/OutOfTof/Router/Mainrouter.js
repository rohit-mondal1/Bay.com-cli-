import { createBrowserRouter } from "react-router-dom";
import About from "../../Components/MainPage/About/About";
import Home from "../../Components/MainPage/Home/Home";
import Profile from "../../Components/MainPage/Profile/Profile";
import Top from "../../Components/MainPage/TopRet/Top";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/top",
        element: <Top />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
