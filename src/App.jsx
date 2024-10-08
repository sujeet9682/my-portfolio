import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contributions from './pages/Contributions'
import Articles from './pages/Articles'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // This layout includes the Sidebar
      children: [
        {
          path: "/",
          element: <Home />, // Home page component
        },
        {
          path: "/about",
          element: <About />, // About page component
        },
        {
          path: "/projects",
          element: <Projects />, // About page component
        },
        {
          path: "/contributions",
          element: <Contributions />, // About page component
        },
        {
          path: "/blog",
          element: <Articles />, // About page component
        },
      ],
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;