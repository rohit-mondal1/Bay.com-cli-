import { createBrowserRouter } from "react-router-dom";
import Login from "../../Components/Authancition/Login";
import Signup from "../../Components/Authancition/Signup";
import About from "../../Components/MainPage/About/About";
import Home from "../../Components/MainPage/Home/Home";
import Profile from "../../Components/MainPage/Profile/Profile";
import Top from "../../Components/MainPage/TopRet/Top";
import PostForm from "../../Components/Sheaird/PostForm";
import Main from "../Layout/Main";
import Protect from "../ProtectsFile/Protect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Protect> <Main /></Protect> ,
    children: [
      {
        path: "/",
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
      {
        path: "/post-from",
        element: <PostForm />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
    ],
  },
]);
