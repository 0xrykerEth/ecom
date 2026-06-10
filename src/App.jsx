import React from "react";
import StoreRoute from "./Pages/StoreRoute";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/Store",
    element: <StoreRoute />
  },
  {
    path : "/About",
    element : <About />
  },{
    path : "/Home",
    element : <Home />
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
