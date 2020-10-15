import React from 'react'
import HeaderIcon from '../../shared/images/CM-logo-white.svg'
import './header.scss'

const Header = () => {
  return (
    <header className='header-container'>
      <div className='header-left'>
        <img className='header-logo-icon' src={HeaderIcon} />
      </div>
      <div className='header-right'>

      </div>
    </header>
  )
}

export default Header