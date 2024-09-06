import React, { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'; // Importing an icon for the button
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye and eye-slash icons


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div>
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-gradient-to-r from-pink-500 to-blue-500">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
            Create an Account
          </h2>
          <form className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-blue-400 hover:border-purple-500 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-300 ease-in-out"
                placeholder="Enter your username"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-blue-400 hover:border-purple-500 rounded-md focus:ring-purple-500 focus:border-purple-500 transition duration-300 ease-in-out"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className=" relative">
            <input
              type={showPassword ? 'text' : 'password'} // Conditionally change input type
              id="password"
              className="w-full px-4 py-2 border border-blue-400 hover:border-purple-500 rounded-lg focus:outline-none focus:border-purple-500 transition duration-300 ease-in-out"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 text-xl flex items-center text-purple-800 hover:text-blackfocus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Conditionally show icons */}
            </button>
            </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-1 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition duration-300 transform hover:scale-105"
            >
              <FaUserPlus className="mr-2" /> {/* Adding icon */}
              Register
            </button>
          </form>

          {/* Additional Links */}
          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account? <Link to='/' className="text-purple-700 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
