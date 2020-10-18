import React from 'react';
// import PlaylinePic from '../../shared/images/playline-logo.svg'
import PlaylinePic from '../../shared/images/Playline/playline-logo1.svg'
// import PorfolioPic from '../../shared/images/portfolio-site-pic.png'
import PorfolioPic from '../../shared/images/CM-logo-white.svg'
import NighOwlPic from '../../shared/images/nightowl-logo.svg'
import CodePinPic from '../../shared/images/codepin.jpg'
import SchedulerPic from '../../shared/images/scheduler-logo.svg'
import TweeterLogo from '../../shared/images/tweeter-logo.svg'
import './projects.scss'

const Projects = () => {
  return (
    <section className='section-container bg-white'>
      <div className='content-container bg-light-slate-grey' id='projects-section'>
        <h1 className='section-header'>Things I've Worked On</h1>
        <div class="grid-container">
          <div className='grid-column-projects'>
            <div className="grid-item bg-34G" id="item-1">
              <img className='grid-image' src={PorfolioPic}/>
            </div>
            <div className="grid-item bg-34G">
              <img className='grid-image' src={CodePinPic} />
            </div>
          </div>
          <div className='grid-column-projects'>
            <div class="grid-item bg-39G">
              <img className='grid-image' src={PlaylinePic}/>
            </div>
            <div class="grid-item bg-39G">
              <img className='grid-image' src={SchedulerPic} />
            </div>
          </div>
          <div className='grid-column-projects'>
            <div class="grid-item bg-36G">
              <img className='grid-image' src={NighOwlPic}/>
            </div>
            <div class="grid-item bg-36G">
              <img className='grid-image' src={TweeterLogo} id="tweet-logo"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects