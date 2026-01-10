import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ fontSize: 30, padding: 10 }}>
        The count is {count}
      </div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Update Count </button>
    </>
  )
}

export default App
