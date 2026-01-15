import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    },
    {
      path: "/login",
      element: <><Navbar /> <Login /></>
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
