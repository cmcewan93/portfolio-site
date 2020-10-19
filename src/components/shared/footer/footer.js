import React from 'react'
import GithubIcon from '../images/social-icons/github-icon.svg'
import LinkedinIcon from '../images/social-icons/linkedin-logo.svg'
import EmailIcon from '../images/social-icons/email.svg'
import './footer.scss'


const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='center-content-container' id='footer-section'>
        <div className='footer-quote'></div>
        <div className='social-contacts-container'>
          <a href="https://github.com/cmcewan93" >
            <img className='social-icon' src={GithubIcon}/>
          </a>
          <a href='https://www.linkedin.com/in/colin-mcewan-a8848453'>
            <img className='social-icon' src={LinkedinIcon} />
          </a>
          <img className='social-icon' src={EmailIcon} />
        </div>
        <div className='info-container'>
          <div className='author-container'> Designed and Created with <div>&#9829;</div> by Colin McEwan </div>
          <div className='copyright-container'>&#169; 2020  All rights reserved. </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer