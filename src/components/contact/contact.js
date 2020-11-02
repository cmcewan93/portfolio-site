import React, {useEffect, useState} from 'react'
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { ErrorMessage } from '@hookform/error-message';
import emailjs, { init } from 'emailjs-com';
import Aos from "aos"

import ConfirmationModal from '../shared/modals/confirmation-modal'

import './contact.scss'

const Contact = ({history}) => {
  const { pathname } = useLocation();
  const { register, handleSubmit, setError, errors } = useForm();
  const {REACT_APP_EMAIL_SERVICE_ID: serviceId, REACT_APP_EMAIL_TEMPLATE_ID: templateId, REACT_APP_EMAIL_USER_ID : userId} = process.env
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  init(userId);

  const [visible, setVisible] = useState(false)
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
  
  useEffect(() => {
    Aos.init({
      duration: 1500,
      disable: function() {
        var maxWidth = 995;
        return window.innerWidth < maxWidth;
      }
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const showModal = () => {setVisible(true)}
  const hideModal = () => {
    setVisible(false)
    history.push("/")
  }
  
  const showConfirmationMessage = (isSuccess) => {
    setIsSuccessfulSubmit(isSuccess);
    showModal()
  }
  const onSubmit = data => {
    let variables = {message: data.message, to_name: 'Colin', from_name: data.name, reply_to: data.email};
    emailjs.send(serviceId, templateId, variables)
      .then(res => {
        showConfirmationMessage(true)
        console.log('Email successfully sent!')
      })
      .catch(err => {
        showConfirmationMessage(false)
        console.error('Failed to send.', err)
      })
  }


  return (
    <section className='section-container bg-white'>
      <div className='content-container bg-white' id='contact-section' data-aos="fade-up">
        <div className='contact-container'>
          <div className='contact-message'> Thanks for taking the time to reach out. <br/> How can I help you today?</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-top-container'>
              <div className={`${errors.name ? 'form-section form-error' : 'form-section'}`} >
                <label className='form-header'>
                  Name:
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter name here"
                  ref={register({ 
                    required: 'This field is required.', 
                    minLength: {
                      value: 2,
                      message: 'Name must be a minimum of 2 characters.'
                    } })}
                />
                <div className='error-container'>
                  <ErrorMessage errors={errors} name="name" as={<div className='error-message'/>}>
                    {({ messages }) =>
                      messages &&
                      Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{message}</p>
                      ))
                    }
                  </ErrorMessage>            
                </div>
              </div>
              <div className={`${errors.email ? 'form-section form-error' : 'form-section'}`}>
                <label className='form-header'>
                  Email: 
                </label>
                <input
                  name='email'
                  type="text"
                  placeholder='emailme@example.com'
                  ref={register({ required: 'This field is required.', pattern: {value: emailRegex, message: "Please enter a valid email."} })}
                />
                <div className='error-container'>
                  <ErrorMessage errors={errors} name="email" as={<div className='error-message'/>}>
                    {({ messages }) =>
                      messages &&
                      Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{message}</p>
                      ))
                    }
                  </ErrorMessage>            
                </div>
              </div>
            </div>
            <div className='form-bottom-container'>
              <div className={`${errors.message ? 'form-section form-error' : 'form-section'}`}>
                <label className='form-header'> 
                  Message:
                </label>
                <textarea
                  name='message'
                  type="text"
                  placeholder='Enter your message here'
                  ref={register({ required: 'This field is required.', maxLength: 400 })}
                />
                <div className='error-container'>
                  <ErrorMessage errors={errors} name="message" as={<div className='error-message'/>}>
                    {({ messages }) =>
                      messages &&
                      Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{message}</p>
                      ))
                    }
                  </ErrorMessage>            
                </div>
              </div>
            </div>
            <input className='submit-button' type="submit" />
          </form>
        </div>
      </div>
      <ConfirmationModal visible={visible} hideModal={hideModal} isSuccess={isSuccessfulSubmit} />
    </section>
  )
}
export default Contact