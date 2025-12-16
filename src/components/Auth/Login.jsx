import React, { useState } from 'react'
import Header from '../others/Header'

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)

    setEmail("")
    setpassword("")
  }

  return (
    
   <div>
    <Header/>
     <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 px-4">
       
      
      {/* MAIN WRAPPER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">

        {/* 🔐 LOGIN SECTION */}
        <div className="border-2 border-emerald-600 p-12 rounded-3xl flex items-center justify-center">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center w-full max-w-sm"
          >
            <h1 className="text-2xl text-white font-bold mb-6">
              Login
            </h1>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-6 bg-transparent text-white outline-none rounded-full border-2 border-emerald-600 placeholder:text-cyan-200"
              type="email"
              placeholder="Enter your Email..."
              required
            />

            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full py-3 px-6 bg-transparent text-white outline-none rounded-full border-2 border-emerald-600 placeholder:text-cyan-200 mt-6"
              type="password"
              placeholder="Enter your Password..."
              required
            />

            <button
              className="py-2 px-8 text-xl rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-6 font-bold scale-95 hover:scale-110 transition"
              type="submit"
            >
              Log In
            </button>
          </form>
        </div>

        {/* 📄 DEMO CREDENTIALS SECTION (SAME SIZE) */}
        <div className="border-2 border-cyan-500 p-8 rounded-3xl text-white flex flex-col justify-center">
          <h2 className="text-xl font-bold text-center mb-4">
            Demo Login Credentials
          </h2>

          {/* ADMIN */}
          <div className="bg-gray-800 p-4 rounded-xl mb-4">
            <h3 className="text-emerald-400 font-semibold mb-2">
              Admin
            </h3>
            <p>Email: <span className="text-cyan-400">admin@me.com</span></p>
            <p>Password: <span className="text-cyan-400">123</span></p>
          </div>

          {/* EMPLOYEES */}
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-yellow-400 font-semibold mb-2">
              Employees (Password same: 123)
            </h3>

            <ul className="text-sm space-y-1 text-cyan-400">
              <li>sufiyan@me.com</li>
              <li>nehal@me.com</li>
              <li>rudra@me.com</li>
              <li>arjun@me.com</li>
              <li>kabir@me.com</li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            * Use any employee email to view employee dashboard
          </p>
        </div>

      </div>
     
    </div>
  
   </div>
  )
}

export default Login
