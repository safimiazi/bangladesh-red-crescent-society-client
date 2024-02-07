import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ResponsiveContext from './Context/ResponsiveContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResponsiveContext>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ResponsiveContext>
  </React.StrictMode>,
)
