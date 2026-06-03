import React from "react";
import StoreRoute from "./Pages/StoreRoute";
import About from "./Pages/About";
import Home from "./Pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

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
  }
]);

function App() {
  

  return (
    <RouterProvider router={router} />  
  )
}

export default App
