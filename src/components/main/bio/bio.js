import React, {useEffect, useRef} from 'react'
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
          <img className='bio-pic' src={LakePic} data-aos-easing="linear" data-aos-duration="500" data-aos="fade-right" />
        </div>
        <div className='bio-text-container'>
          <h1 className='bio-header' >ABOUT</h1>
          <div className='divider-line' />
          <div className='text-container'  data-aos-easing="linear" data-aos-duration="500" data-aos="fade-right">
            <p className='bio-description' >
              I'm a Toronto-based software developer with a passion for creating responsive, scalable and user-friendly applications. 
              After graduating from Seneca College in 2019 with a Diploma in Computer Programming, I went on to complete a 12-week, 
              fully immersive Web Development bootcamp with Lighthouse Labs. I've since completed my first full-time position as a Full 
              Stack Developer at PlayLine, a local start-up in the online gaming industry. 
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