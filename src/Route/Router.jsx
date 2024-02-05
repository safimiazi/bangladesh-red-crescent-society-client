import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import DRoot from "../DashRoot.jsx/DRoot";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
      ]
    },
    {
        path: "/dashboard",
        element: <DRoot/>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard/>
        },
        ]
    }
  ]);

  export default router;