import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/Authen/Signin";
import SignUp from "../pages/Authen/Signup";
import ResetPassword from "../pages/Authen/ResetPassword";
import Activate from "../pages/Authen/Activate";
import NotFoundPage from "../pages/Authen/NotFound";
import Layout from "../layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "*", element: <NotFoundPage /> },
      { path: "/", element: <App /> },
      { path: "/login", element: <SignIn /> },
      { path: "/register", element: <SignUp /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/activate/:uid/:token", element: <Activate /> },
    ],
  },
]);

export default router;
