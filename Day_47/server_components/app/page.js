// "use client"
// import React, { useState } from 'react'
import fs from 'fs/promises  ' 

const page = async () => {
  // const [count , setCount] = useState(0)
  console.log("This is my home page")

  let a = await fs.readFiles("public")
  a.then(e =>{console.log(e)})
  return (
    <div>
      {/* <h1>The count is {count }</h1>
      <button onClick={()=> setCount(count + 1 )}>Click Me </button> */}
      <h1>thisis my page </h1>
    </div>
  )
}

export default page
