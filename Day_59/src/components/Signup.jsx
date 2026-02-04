import React, { useState, } from 'react'
import { useNavigate } from "react-router-dom";


const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useNavigate();

    const hanldeSubmit = async (e) => {
        e.preventDefault()
        // eslint-disable-next-line 
        const { name, email, password } = credentials
        const responce = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        })
        const json = await responce.json()
        console.log(json)
        if (json.success) {
            // Save the authToken and redirect 
            localStorage.setItem('token', json.authToken)
            history("/");
            props.showAlert("Account Created Successfully ", "success")
        }
        else {
            props.showAlert("Invalide Details", "Error")
        }
    }

    const handleONchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }




    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Create an account to use iNoteBook
            </h2>

            <form onSubmit={hanldeSubmit} className="space-y-5">
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleONchange}
                        aria-describedby="emailHelp"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleONchange}
                        aria-describedby="emailHelp"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p id="emailHelp" className="mt-1 text-xs text-gray-500">
                        We'll never share your email with anyone else.
                    </p>
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        minLength={5}
                        required
                        onChange={handleONchange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Confirm Password */}
                <div>
                    <label
                        htmlFor="cpassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="cpassword"
                        name="cpassword"
                        minLength={5}
                        required
                        onChange={handleONchange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-md font-medium text-white
                       bg-blue-600 hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}

export default Signup
