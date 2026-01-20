import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-around bg-slate-800 text-white py-4'>
        <div className='text-center '>
            copyright jSharam | All right reserved 

        </div>
        <ul className='flex gap-3 text-sm'>
            <a href=""><li>Home</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Contact</li></a>
        </ul>

      </footer>
    </div>
  )
}

export default Footer
