"use client"
import React from 'react'
import { usePathname } from "next/navigation";

const Navbar = () => {  
  const pathName = usePathname()

  return (
    <div>
      This is navbar
    </div>
  )
}

export default Navbar
