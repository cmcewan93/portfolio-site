import React, {useEffect} from 'react'
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import './contact.scss'

const Contact = props => {
  const { pathname } = useLocation();
  const { register, handleSubmit, setError, errors } = useForm();
  const onSubmit = data => console.log(data);
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // const handleInputChange = (event) => {
    
  //   const target = event.target;
  //   const eventName = target.name;
  //   const newFormState = {
  //     name: '',
  //     email: '',
  //     message: '',
  //   }

  //   switch(eventName) {
  //     case 'name':
  //       newFormState.name = target.value;
  //       break;
  //     case 'email':
  //       newFormState.email = target.value;
  //       break;
  //     case 'message':
  //       newFormState.message = target.value;
  //       break;
  //   }
  // }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className='section-container bg-white'>
      <div className='content-container bg-white' id='contact-section'>
        <div className='contact-container'>
          <div className='contact-message'> Thanks for taking the time to reach out. <br/> How can I help you today?</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-top-container'>
              <div className='form-section'>
                <label className='form-header'>
                  Name:
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter name here"
                  ref={register({ required: 'Field Required', maxLength: 20 })}
                />
              </div>
              <div className='form-section'>
                <label className='form-header'>
                  Email: 
                </label>
                <input
                  name='email'
                  type="text"
                  placeholder='emailme@example.com'
                  ref={register({ required: 'Field Required', pattern: emailRegex })}
                />
              </div>
            </div>
            <div className='form-bottom-container'>
              <div className='form-section'>
                <label className='form-header'> 
                  Message:
                </label>
                <textarea
                  name='message'
                  type="text"
                  placeholder='Enter your message here'
                  ref={register({ required: 'Field Required', maxLength: 400 })}
                />
              </div>
            </div>
            <input className='submit-button' type="submit" />
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact