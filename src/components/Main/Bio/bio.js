import React from 'react'
import LakePic from '../../shared/images/lakepic.jpg'
import './bio.scss'

const Bio = () => {
  return (
    <section className='section-container bg-off-white'>
      <div className='content-container' id='bio-section'>
        {/* <img className='bio-pic' src={LakePic}/> */}
       <h1 className='bio-header'>ABOUT</h1>
       <div className='divider-line'/>
       <p className='bio-description'>
        Hi my name is Colin. I am a Software Developer currently based out of Toronto, Canada. I am passionate about creating responsive, scalable and user-friendly applications
        that are optimized to fit a client's needs. I have experience working in a start up environment
       </p>
       <div className='divider-line'/>
      </div>
    </section>
  )
}

export default Bio