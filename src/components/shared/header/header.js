import React from 'react'
import {Link} from 'react-router-dom';
import NavBar from './navbar'
import './header.scss'
import HeaderIcon from '../../shared/images/CM-logo-white.svg'

const Header = () => {
  return (
    <header className='header-container'>
      <div className='center-content-container' id="header-inner-container">
        <div className='header-left'>
          <Link to='/'>
            <img className='header-logo-icon' src={HeaderIcon} />
          </Link>
        </div>
        <div className='header-right'>
          <NavBar />
        </div>
      </div>
    </header>
  )
}

export default Header