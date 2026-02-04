import React, { useState, } from 'react'
import { useNavigate } from "react-router-dom";


const Login = (props) => {


    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useNavigate();

    const hanldeSubmit = async (e) => {
        e.preventDefault()
        // eslint-disable-next-line 
        const responce = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const json = await responce.json()
        console.log(json)
        if (json.success) {
            // Save the authToken and redirect 
            localStorage.setItem('token', json.authToken)
            props.showAlert("Logged In Successfully ", "success")
            history("/");
        } else {
            props.showAlert("Invalide Credentials", "danger")
        }
    }

    const handleONchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }



    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Login to continue to iNoteBook
            </h2>

            <form onSubmit={hanldeSubmit} className="space-y-5">
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
                        value={credentials.email}
                        onChange={handleONchange}
                        aria-describedby="emailHelp"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-blue-500"
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
                        value={credentials.password}
                        onChange={handleONchange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-md font-medium text-white
                       bg-blue-600 hover:bg-blue-700
                       transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}

export default Login
