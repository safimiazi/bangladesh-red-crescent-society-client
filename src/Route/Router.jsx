import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import DRoot from "../DashRoot.jsx/DRoot";
import HumanAsset from "../Pages/Dashboard/HumanAsset";
import Error from "../Shared/Error";
import Volunteer from "../Pages/Dashboard/DashPage/HunmanAsset/Volunteer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DRoot />,
    children: [
      {
        path: "/dashboard/home",
        element: <Dashboard />
      },
      {
        path: "/dashboard/human-asset",
        element: <HumanAsset />
      },
      {
        path: "/dashboard/volunteer",
        element: <Volunteer/>
      },
      
    ]
  }
]);

export default router;