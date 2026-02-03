import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black p-4 text-white flex justify-around items-center min-h-20'>
        <div className="logo font-bold text-3xl mb-2">
            PassOP
        </div>
        <ul className='flex gap-8 list-nonev text-lg'>
            <li className='hover:font-bold transition delay-150 duration-300 ease-in-out'>
                <a href="#">Home</a>
            </li>
            <li className='hover:font-bold transition delay-150 duration-300 ease-in-out'>
                <a href="#">About</a>
            </li>
            <li className='hover:font-bold transition delay-150 duration-300 ease-in-out'>
                <a href="#">Contact</a>
            </li>   
             <li className='hover:font-bold transition delay-150 duration-300 ease-in-out'>
                <a href="#">Services</a>
            </li>
        </ul>
      
    </nav>
  )
}

export default Navbar
