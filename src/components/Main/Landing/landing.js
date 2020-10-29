import React from 'react'
import {scroller } from 'react-scroll'
import DownArrow from '../../shared/images/down-arrow-light-grey.svg'
import './landing.scss'

/**
 * This is the main content container for home page.
 */

 const Landing = ({bioRef}) => {

  // const scrollTo = (ref) => {
  //   if (ref /* + other conditions */) {
  //     ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  //   }
  // }

  const scrollToRefObject = (ref) => window.scrollTo({
    top: ref.current.offsetTop - 50,
    behavior: "smooth"
  }) 

   return (
     <section className='section-container bg-slate-grey' >
       <div className='content-container' id='landing-section'>
          <div className='title-container'>
            <div className='name-container'>
              <h1>Colin McEwan</h1>
            </div>
            <h2>Software Developer, Mentor & Creative Mind</h2>
          </div>
          <div
           className='arrow-container'
           onClick={() => {
             console.log('here')
             scrollToRefObject(bioRef)
           }}
           >
            <p className='text-container'>View my work</p>
            <img className='bounce' src={DownArrow}/>
          </div>
       </div>
     </section>  
   )
 }

 export default Landing