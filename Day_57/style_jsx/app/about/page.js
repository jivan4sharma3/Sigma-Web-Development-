"use client"
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>This is about page . </h1>
       <div className="container">
      <h1>Hello Next.js</h1>
      <p>Let's explore different ways to style Next.js apps</p>
      <style jsx>{`
        .container {
          margin: 50px;
        background-color : red
        }
        p {
          color: blue;
        }
      `}</style>
    </div>
    </div>
  )
}

export default page
