"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { loginHandler } from '@/apiHandler/customApiHandler';
import { useRouter } from 'next/navigation';


function LoginComponent() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    setIsLoading(true);

    try {
      const data = await loginHandler('/auth/login', phoneNumber, password);

      // Handle the response data
      if (data.success === true) {
        
        router.push('/');
        // router.replace("/");
        
        console.log("logged in", data)
      }
      // setShow(false);
      console.log("login response", data);
    } catch (error) {
      // Handle the error
      // setShow(false);
      console.log(error);
    }

    setIsLoading(false);
  };
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200"
              placeholder="Enter your username"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <div >
              <div>
                <input
                  type={showPassword ? "text" : "password"} // Toggle between text and password type
                  id="password"
                  className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-200"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="absolute top-2/3 right-2 transform -translate-y-1/2 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="text-gray-400"
                  />
                </button>
              </div>
            </div>
          </div>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <button
            type="button"
            className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600'
              }`}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginComponent
