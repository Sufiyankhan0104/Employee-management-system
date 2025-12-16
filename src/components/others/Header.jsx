import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }


  return (
    <header className="w-full px-6 py-4 bg-linear-to-r from-emerald-600 via-cyan-500 to-emerald-600
      shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT SIDE : Logo + Text */}
        <div className="flex items-center gap-4">
          <img
            src="/EMS-logo.png"
            alt="EMS Logo"
            className="h-18 w-18 object-contain rounded-full"
          />

          <div className="hidden sm:block">
            <h1 className="text-white text-lg font-semibold leading-tight">
              Employee Management System
            </h1>
            <p className="text-white/80 text-xl">
              Welcome, <span className="font-semibold text-3xl">👋</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE : Logout */}
        <button
          onClick={logOutUser}
          className="bg-red-600 hover:bg-red-700 transition
          text-white px-5 py-2 rounded-3xl text-lg font-medium shadow-md cursor-pointer"
        >
          Log Out
        </button>

      </div>
    </header>
  )
}

export default Header