import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='main'>
            <nav>
                <div>
                    <h1>JSharma</h1>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About me </li>
                    <li>Services</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
