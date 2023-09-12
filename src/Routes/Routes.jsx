import {
    createBrowserRouter,
    } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Care from "../Care/Care";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Blog/Blog";


   export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/Login",
          element:<Login></Login>
        },
        {
          path:"/Register",
          element:<Register></Register>
        },
        {
          path:"/Care",
          element:<PrivateRoute><Care></Care></PrivateRoute>
        },
        {
          path:"/Blog",
          element:<PrivateRoute><Blog></Blog></PrivateRoute>
        }
    ]
    },
  ]);