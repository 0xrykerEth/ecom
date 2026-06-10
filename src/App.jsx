import React from "react";
import StoreRoute from "./Pages/StoreRoute";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/Store",
    element: (<ProtectedRoute><StoreRoute /></ProtectedRoute>)
  },
  {
    path : "/About",
    element : <About />
  },{
    path : "/Home",
    element : (<ProtectedRoute><Home /></ProtectedRoute>)
  },{
    path: '/Contact',
    element : <Contact/>
  },{
    path : '/Auth',
    element : <Login/>
  }
]);

function App() {
  
  return (
    <RouterProvider router={router} />  
  )
}

export default App
