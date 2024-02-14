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
import StockIntems from "../Pages/Dashboard/DashPage/Stock Managesment/StockIntems";
import Addnewstock from "../Pages/Dashboard/Form/StockManagesment/Addnewstock";
import StockOutItems from "../Pages/Dashboard/DashPage/Stock Managesment/StockOutItems";
import Stockout from "../Pages/Dashboard/Form/StockManagesment/Stockout";
import Items from "../Pages/Dashboard/DashPage/Stock Managesment/Items";
import AddItem from "../Pages/Dashboard/Form/StockManagesment/AddItem";
import StockWarehouse from "../Pages/Dashboard/DashPage/Stock Managesment/StockWarehouse";
import AddNewWarehouse from "../Pages/Dashboard/Form/StockManagesment/AddNewWarehouse";

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

      // human asset
      {
        path: "/dashboard/member",
        element: <Member/>
      },
      {
        path: "/dashboard/volunteer",
        element: <Volunteer/>
      },

      //  stock managesment
      {
        path: '/dashboard/stocksummary',
        element: <StockSummary/>
      },
      {
        path: '/dashboard/stockinitem',
        element: <StockIntems/>
      },
      {
        path: '/dashboard/addnewstock',
        element: <Addnewstock/>
      },
      {
        path: '/dashboard/stockOutitems',
        element: <StockOutItems/>
      },

      {
        path: '/dashboard/stockout',
        element: <Stockout/>
      },
      {
        path: '/dashboard/item',
        element: <Items/>
      },
      {
        path: '/dashboard/additem',
        element: <AddItem/>
      },
      {
        path: '/dashboard/stockwarehouse',
        element: <StockWarehouse/>
      },
      {
        path: '/dashboard/addnewwarehouse',
        element: <AddNewWarehouse/>
      }
       
       
      

      
    
      

    ]
  }
]);

export default router;