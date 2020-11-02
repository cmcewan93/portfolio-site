import React, {useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom';
import BurgerMenu from '../images/burger-menu.svg'

const NavBar = ({showSectionAnchors}) => {
  const [projectAnchor, setProjectAnchor] = useState(null);
  const [skillsAnchor, setSkillsAnchor] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  
  useEffect(() => {
    setProjectAnchor(document.getElementById('projects-section'));
    setSkillsAnchor(document.getElementById('skills-section'))
  }, []);

  const handleClick = (anchor) => {
    window.scrollTo({behavior: 'smooth', block: 'start', top: anchor.offsetTop - 60})
    setShowDropdown(false)
  }

  return (
    <nav className='navbar-container'>
      <div className='web-nav-container'>
        {
          showSectionAnchors ? 
          <Fragment>
            <div className='navbar-link-container'>
              <div onClick={() => {handleClick(skillsAnchor)}} className='navbar-link'>Skills</div>
            </div>
            <div className='navbar-link-container'>
              <div onClick={() => {handleClick(projectAnchor)}} className='navbar-link'>Projects</div>
            </div>
            <div className='navbar-link-container'>
              <Link to="/contact" className='navbar-link'>Contact</Link>
            </div>
          </Fragment>
          
          : 
          <div className='navbar-link-container'>
            <Link to="/" className='navbar-link'>Home</Link>
          </div>
        }      
        {/* <div className='navbar-link'>Blog</div> */}
      </div>
      <div className='mobile-nav-container'>
        <img src={BurgerMenu} onClick={() => setShowDropdown(!showDropdown)}/>
        {
          showDropdown ?
            <div className="dropdown-container">
              {
                showSectionAnchors ? 
                <Fragment>
                  <div className='navbar-link-container'>
                    <div onClick={() => {handleClick(skillsAnchor)}} className='navbar-link'>Skills</div>
                  </div>
                  <div className='navbar-link-container'>
                    <div onClick={() => {handleClick(projectAnchor)}} className='navbar-link'>Projects</div>
                  </div>
                  <div className='navbar-link-container'>
                    <Link to="/contact" className='navbar-link'>Contact</Link>
                  </div>
                </Fragment>       
                : 
                <div className='navbar-link-container'>
                  <Link to="/" className='navbar-link'>Home</Link>
                </div>
              }       
            </div>
          : null
        }
      </div>
    </nav>
  )
}

export default NavBar