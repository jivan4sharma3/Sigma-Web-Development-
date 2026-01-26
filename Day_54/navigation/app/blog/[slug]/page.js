import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const prams = useParams()
  return (
    <div>
          <h1> The {prams}</h1>
    </div>
  )
}

export default page
