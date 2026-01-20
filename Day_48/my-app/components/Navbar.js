import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around  bg-slate-800 text-white py4'>
        <div className='logo font-bold'>Jsharma</div>
        <ul className='flex gap-6'>
            <a href="/"><li>Home</li></a>
            <a href="/about"><li>About </li></a>
            <a href="/contact"><li>Cantact</li></a>
        </ul>
    </nav>
  )
}

export default Navbar