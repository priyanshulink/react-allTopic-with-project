import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] z-50 
                    bg-white/10 backdrop-blur-xl backdrop-saturate-150
                    border border-white/20 
                    shadow-[0_8px_32px_rgba(31,38,135,0.37)] 
                    rounded-2xl transition-all duration-300">

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-white">
        
        {/* Logo */}
        <h1 className="font-semibold text-lg tracking-wide">
          GlassUI
        </h1>

        {/* Links */}
        <div className="flex gap-8 items-center">

          <NavLink
            to="/"
            style={({isActive})=>({
                color:isActive?'red':'white'
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({isActive})=>({
                color:isActive?'red':'white'
            })}
          >
            About
          </NavLink>

          <NavLink
            to="/course"
            style={({isActive})=>({
                color:isActive?'red':'white'
            })}
          >
            Course
          </NavLink>

          

        </div>
      </div>
    </nav>
  )
}

export default Navbar