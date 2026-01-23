"use client";
import { submitAction } from '@/action/form'
import React, { useRef } from 'react'



export default function Home() {
   const ref = useRef()

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-gray-900 font-sans">

      <form ref={ref} action={(e) => { submitAction(e); ref.current.reset() }} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">Sign Up</h2>

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-gray-700 dark:text-gray-200 font-medium">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-gray-700 dark:text-gray-200 font-medium">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 text-gray-700 dark:text-gray-200 font-medium">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

  );
}
