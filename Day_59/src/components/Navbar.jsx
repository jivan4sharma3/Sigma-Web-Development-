import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
    let navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

    let location = useLocation()

    return (
        <nav className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link
                        className="text-xl font-bold text-white"
                        to="/"
                    >
                        iNoteBook
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <ul className="flex gap-4">
                            <li>
                                <Link
                                    className={`text-sm font-medium hover:text-blue-400 transition
                                        ${location.pathname === "/" ? "text-blue-400" : "text-gray-300"}`}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`text-sm font-medium hover:text-blue-400 transition
                                        ${location.pathname === "/about" ? "text-blue-400" : "text-gray-300"}`}
                                    to="/about"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>

                        {/* Auth Buttons */}
                        {!localStorage.getItem('token') ? (
                            <div className="flex gap-3">
                                <Link
                                    className="px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 transition"
                                    to="/login"
                                >
                                    Login
                                </Link>

                                <Link
                                    className="px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 transition"
                                    to="/signup"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        ) : (
                            <button
                                onClick={handleLogOut}
                                className="px-4 py-1.5 rounded-md bg-red-600 hover:bg-red-700 transition"
                            >
                                Log Out
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
