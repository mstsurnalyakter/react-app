import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink  className='link' to='/'>Home</NavLink>
        <NavLink  className='link' to='/blogs'>Blogs</NavLink>
        <NavLink  className='link' to='/contact'>Contact</NavLink>
        <NavLink  className='link' to='/user'>User</NavLink>
    </nav>
  )
}

export default Navbar