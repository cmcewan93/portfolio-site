import React, {useRef} from 'react'
import Landing from './Landing/landing'
import Bio from './Bio/bio'
import Skills from './Skills/skills'
import Projects from './Projects/projects'
import FollowUp from './Follow-up/follow-up'
import './main.scss'

/**
 * This is the main content container for home page.
 */

 const Main = () => {

  const bioRef = useRef();

   return (
    <div className='main-content-container'>
      <Landing bioRef={bioRef}/>
      <Bio bioRef={bioRef}/>
      <Skills />
      <Projects />
      <FollowUp />
    </div>
   )
 }

 export default Main