import React from 'react'
import LakePic from '../../shared/images/lakepic.jpg'
import './bio.scss'

const Bio = () => {
  return (
    <section className='section-container bg-off-white'>
      <div className='content-container' id='bio-section'>
        <img className='bio-pic' src={LakePic}/>
       <h1 className='bio-header'>Hi there, I'm Colin. Nice to meet you.</h1>
       <div className='divider-line'/>
       <p className='bio-description'>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </p>
       <div className='divider-line'/>
      </div>
    </section>
  )
}

export default Bio