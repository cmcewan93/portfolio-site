import React, {useRef} from 'react'
import Landing from './landing/landing'
import Bio from './bio/bio'
import Skills from './skills/skills'
import Projects from './projects/projects'
import FollowUp from './follow-up/follow-up'
import './main.scss'

/**
 * This is the main content container for home page!.
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