import React, {useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom';

const NavBar = ({showSectionAnchors}) => {
  const [projectAnchor, setProjectAnchor] = useState(null);
  const [skillsAnchor, setSkillsAnchor] = useState(null);
  
  useEffect(() => {
    setProjectAnchor(document.getElementById('projects-section'));
    setSkillsAnchor(document.getElementById('skills-section'))
  }, []);

  const handleClick = (anchor) => {
    window.scrollTo({behavior: 'smooth', block: 'start', top: anchor.offsetTop - 60})
  }

  return (
    <nav className='navbar-container'>
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
         
        : null
      }      
      {/* <div className='navbar-link-container'>
        <Link to="/contact" className='navbar-link'>Contact</Link>
      </div> */}
      {/* <div className='navbar-link'>Blog</div> */}
    </nav>
  )
}

export default NavBar