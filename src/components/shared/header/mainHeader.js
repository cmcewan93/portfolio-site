import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import NavBar from './navbar'
import './header.scss'
import HeaderIcon from '../../shared/images/CM-logo-white.svg'

const MainHeader = () => {

  let history = useHistory()
  let isContactPage = history.location.pathname == "/contact" ? true : false;
  
  const [headerBackground, setHeaderBackground] = useState(isContactPage ? 'header-solid' : 'headerTransparent')
  const headerRef = useRef()
  headerRef.current = headerBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 5
      show || isContactPage ? setHeaderBackground('header-solid') : setHeaderBackground('header-transparent')
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`header-container ${headerBackground}`}>
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

export default MainHeader