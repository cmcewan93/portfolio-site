import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import NavBar from './navbar'
import './header.scss'
import HeaderIcon from '../../shared/images/CM-logo-white.svg'

const MainHeader = () => {

  const [headerBackground, setHeaderBackground] = useState('headerTransparent')
  const headerRef = useRef()
  headerRef.current = headerBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 5
      show ? setHeaderBackground('header-solid') : setHeaderBackground('header-transparent')
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
          <NavBar showSectionAnchors={true}/>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
