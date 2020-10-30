import React, {useState, useEffect} from 'react'
import Rodal from 'rodal'

import GithubIcon from '../images/social-icons/github-icon.svg'
import LinkedinIcon from '../images/social-icons/linkedin-logo.svg'

import 'rodal/lib/rodal.css';
import './modal.scss'

const ConfirmationModal = ({hideModal, visible, isSuccess}) => {
  const styleObject = {
    width: '345px',
    height: '200px'
  }
  return (
    <Rodal
      className='confirmation-modal'
      visible={visible} 
      onClose={() => {hideModal()}} 
      animation={'zoom'} 
      duration={600} 
      customStyles={styleObject}
    >
      <div className='modal-container'>
        <div className={isSuccess ? 'modal-title success' : 'modal-title failure'}> 
          {
            isSuccess ? 
              'Message Received! I will get back in contact with you ASAP!'
            :
              'There was an error processing your message.'
          }
        </div>
        <div className='modal-text-container'> 
          {
            isSuccess ? 
              'Feel free to add me on linkedin or check out my github using the links below!'
            :
              'Please email me directly or message me through linkedin using the links below. Sorry for the inconvenience!'
          }
        </div>
        <div className='links-container'>  
          <a href="https://github.com/cmcewan93" >
            <img className='social-icon' src={GithubIcon}/>
          </a>
          <a href='https://www.linkedin.com/in/colin-mcewan-a8848453'>
            <img className='social-icon' src={LinkedinIcon} />
          </a>
        </div>    
      </div>
    </Rodal>
  )
}

export default ConfirmationModal