import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("Welcome to my react app")
  }, [])

  useEffect(() => {
    alert("Count is change")
  }, [count])

  return (
    <>
      <Navbar /> 
    </>
  )
}

export default App
