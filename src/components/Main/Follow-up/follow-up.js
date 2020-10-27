import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import AirplaneIcon from '../../shared/images/social-icons/airplane.svg'
import MessageIcon from '../../shared/images/social-icons/chat.svg'
import MessageIconWhite from '../../shared/images/social-icons/chatWhite.svg'
import './follow-up.scss'

const FollowUp = () => {
  const [msgButtonHovered, setMsgButtonHovered] = useState(false)
  return (
    <section className='section-container bg-white'>
       <div className='content-container' id='followup-section'>
          <div className='follow-up-inner-container'>
            <img className='paper-airplane' src={AirplaneIcon} />
            <h1>Looking to collaborate ?</h1>
            <div className='follow-up-text'>
              Whether you have an exciting employment opportunity, project or just want to say hi, send me a message!
            </div>
            <Link 
            className='message-button-container'
            to='/contact'
             >
              <div className='message-button' onMouseEnter={() => {setMsgButtonHovered(true)}} onMouseLeave={() => {setMsgButtonHovered(false)}}>
                <div> Message me</div>
                <img className='message-icon' src={msgButtonHovered ? MessageIconWhite : MessageIcon} />
              </div>
            </Link>
          </div>
       </div>
    </section>
  )
}

export default FollowUp