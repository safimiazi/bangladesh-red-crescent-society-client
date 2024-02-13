import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import DRoot from "../DashRoot.jsx/DRoot";
import Error from "../Shared/Error";
import Volunteer from "../Pages/Dashboard/DashPage/HunmanAsset/Volunteer";
import Member from "../Pages/Dashboard/DashPage/HunmanAsset/Member";
import StockSummary from "../Pages/Dashboard/DashPage/Stock Managesment/StockSummary";

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
        path: "/dashboard/member",
        element: <Member/>
      },
      {
        path: "/dashboard/volunteer",
        element: <Volunteer/>
      },

      {
        path: '/dashboard/stocksummary',
        element: <StockSummary/>
      }

 

    
      

    ]
  }
]);

export default router;