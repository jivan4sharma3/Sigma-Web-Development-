import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <div>{count}</div>
      <div className="btn">
      <button onClick={() => { setCount(count + 1) }}>Increase</button>
      <button onClick={() => { setCount(count - 1) }}>Decrease</button>
      </div>
    </div>
  )
}

export default App
