import React from 'react'
import Arrow from '../../shared/images/arrow-icon.svg'
import scrollToRefObject from '../../shared/helpers/scroll-to-ref'
import './landing.scss'

 const Landing = ({bioRef}) => {

   return (
     <section className='section-container bg-slate-grey' >
       <div className='content-container' id='landing-section'>
          <div className='title-container'>
            <div className='name-container'>
              <h1>Colin McEwan</h1>
            </div>
            <h2>Software Developer, Mentor & Creative Mind</h2>
          </div>
          <div className='arrow-container' onClick={() => {scrollToRefObject(bioRef)}}>
            <p className='text-container'>View my work</p>
            <div className='arrow-icon-container'>
              <img className='arrow-icon' src={Arrow}/>
            </div>
          </div>
       </div>
     </section>  
   )
 }

 export default Landing