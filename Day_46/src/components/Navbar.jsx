import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Navbar = () => {

  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>This is navbar and the count is {count} </h1>
    </div>
  )
}

export default Navbar
