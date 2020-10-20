import React, {useState, useEffect} from './node_modules/react'
import {Link} from './node_modules/react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar-container'>
      <Link to="/contact" className='navbar-link'>Contact</Link>
      <div className='navbar-link'>Projects</div>
      <div className='navbar-link'>Blog</div>
    </nav>
  )
}

export default NavBar