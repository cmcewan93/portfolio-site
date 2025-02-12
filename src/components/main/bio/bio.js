import React, { useEffect } from 'react'
import LakePic from '../../shared/images/lakepic2.png'
import Aos from "aos"
import './bio.scss'

const Bio = ({bioRef}) => {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <section className='section-container bg-off-white' ref={bioRef}>
      <div className='content-container' id='bio-section'>
        <div className='bio-image-container'>
          <img className='bio-pic' src={LakePic} data-aos-easing="linear" data-aos-duration="500" data-aos="fade-right" alt='Lake'/>
        </div>
        <div className='bio-text-container'>
          <h1 className='bio-header' >ABOUT</h1>
          <div className='divider-line' />
          <div className='text-container'  data-aos-easing="linear" data-aos-duration="500" data-aos="fade-right">
            <p className='bio-description' >
              I'm a Toronto-based software developer with five years of experience building responsive, scalable, and user-friendly applications. 
              I started my career as a Full Stack Developer at PlayLine, a local start-up in the online gaming industry, before consulting at Button Inc, 
              where I contributed to government-funded web applications. I then joined Case IQ's Platform Team, where I worked on improving the core architecture, 
              enhancing user configurability, and optimizing system performance to support a scalable and flexible SaaS platform.
            </p>
            <p className='bio-description'>
              I've always enjoyed building things and the problem-solving that comes with it. Whether working on my own or collaborating with others, 
              the sense of accomplishment I get from bringing ideas to life through programming has been one of my greatest motivators. 
              My philosophy is that effective software comes from patience, determination, and creativity.
            </p>
            <p className='bio-description'>
              When I'm not working on my latest project, I enjoy helping other new developers in my field, sharing my own experiences and advice. If you need advice on how to break into
              the software development field, or would like to discuss an opportunity, feel free to reach out to me.
            </p>
          </div>
          <div className='divider-line'/>
        </div>
      </div>
    </section>
  )
}

export default Bio