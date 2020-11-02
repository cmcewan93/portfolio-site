import React from 'react'
import {Link} from 'react-router-dom'
import "./not-found.scss"

const NotFound = () => {
  return (
    <section className='section-container bg-white'>
      <div className='content-container bg-slate-grey' id='not-found-section' >
        <h2>OOPS!</h2>
        <h1 className='not-found-header'> Looks like you tried to access a page that doesn't exist. </h1>
          <div className='home-button'>
            <Link to='/'>
              Return to Home
            </Link>
          </div>
      </div>
    </section>
  )
}

export default NotFound;