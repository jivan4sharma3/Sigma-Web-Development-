import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Jivan")
  const [form, setForm] = useState({
    name: "",
    phone: ""
  })


  const handleClick = () => {
    alert("the button was clicked")
  }

  const handelMouseover = () => {
    alert("the Event was MouseOver Event ")
  }

  const handleOnchange = (e) => {
    // // setName(e.target.value)
    // setForm(...form, [e.traget.name]: e.traget.value)
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

      <div>
        <input type="text" value={form.name} name='name' onChange={handleOnchange} />
        <input type="text" value={form.phone} name='phone' onChange={handleOnchange} />
      </div>
    </>
  )
}

export default App
