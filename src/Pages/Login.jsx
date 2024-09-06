import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye and eye-slash icons
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // variables
    const [email, setEmail]= useState('')
    const [emailError, setEmailError]= useState('')
    const [password, setPassword]= useState('')
    const [passwordError, setPasswordError]= useState('')
    const [showPassword, setShowPassword] = useState(false);
    // functions
    const HandleEmail = (e)=>{
        setEmail(e.target.value)
        setEmailError('')
    }
    const HandlePassword = (e)=>{
        setPassword(e.target.value)
        setPasswordError('')
    }
    // main submit function
    const mainSubmit = (e)=>{
        e.preventDefault()
        if(!email){
            setEmailError('Enter your email')
        }if(!password){
            setPasswordError('Enter your password')
        }else{
            console.log('login done');
        }
    }

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
      <div>
        <ToastContainer/>
           <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full border-gradient-to-r from-pink-500 to-blue-500">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-8">
          Login to Your Account
        </h2>
        
        <form onSubmit={mainSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
            onChange={HandleEmail}
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-blue-400 hover:border-purple-500 rounded-lg focus:outline-none focus:border-purple-500 transition duration-300 ease-in-out"
              placeholder="Enter your email"
            />
            <p className='text-xs text-red-600 '>{emailError}</p>
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
            onChange={HandlePassword}
              type={showPassword ? 'text' : 'password'} // Conditionally change input type
              id="password"
              className="w-full px-4 py-2 border border-blue-400 hover:border-purple-500 rounded-lg focus:outline-none focus:border-purple-500 transition duration-300 ease-in-out"
              placeholder="Enter your password"
            />
            <p className='text-xs text-red-600 '>{passwordError}</p>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 top-7 pr-3 text-xl flex items-center text-purple-800 hover:text-blackfocus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Conditionally show icons */}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold py-2 rounded-lg transition duration-300 transform hover:scale-105"
          >
            <FaSignInAlt className="mr-2" /> {/* Adding icon */}
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to='/register' className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login
