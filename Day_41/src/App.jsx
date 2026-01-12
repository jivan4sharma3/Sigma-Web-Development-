import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Jivan")


  const  handleClick= ()=>{
    alert("the button was clicked")
  }

  const handelMouseover = ()=>{
    alert("the Event was MouseOver Event ")
  }

  const handleOnchange = (e)=>{
    setName(e.target.value)
  }

  return (
    <>
     <div>
         <button onClick={handleClick}>Click Me </button>
     </div>
     {/* <div className="red-div" onMouseOver={handelMouseover}>

     </div> */}
     <div>
      <input type="text" value={name} onChange={handleOnchange} />
     </div>
    </>
  )
}

export default App
