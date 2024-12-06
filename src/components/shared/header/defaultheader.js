import React from 'react'
import {Link} from 'react-router-dom';
import NavBar from './navbar'
import './header.scss'
import HeaderIcon from '../../shared/images/cm-logo-white.svg'

const DefaultHeader = () => {

  return (
    <header className={`header-container header-solid`}>
      <div className='center-content-container' id="header-inner-container">
        <div className='header-left'>
          <Link to='/'>
            <img className='header-logo-icon' src={HeaderIcon} />
          </Link>
        </div>
        <div className='header-right'>
          <NavBar showSectionAnchors={false} />
        </div>
      </div>
    </header>
  )
}

export default DefaultHeader
