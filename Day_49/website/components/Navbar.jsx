import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-900 text-white px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* Logo / Brand */}
                    <div className="text-xl font-semibold">
                        MyApp
                    </div>

                    {/* Menu Items */}
                    <ul className="flex space-x-6">
                        <Link href="/"> <li className="hover:text-gray-300 cursor-pointer">Home</li></Link>
                        <Link href="/about"> <li className="hover:text-gray-300 cursor-pointer">About</li></Link>
                        <Link href=""><li className="hover:text-gray-300 cursor-pointer">Services</li></Link>
                        <Link href="/contact"> <li className="hover:text-gray-300 cursor-pointer">Contact</li></Link>
                    </ul>

                    {/* Button */}
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                        Login
                    </button>
                </div >
            </nav >
        </div >
    )
}

export default Navbar
