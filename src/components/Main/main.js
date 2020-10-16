import React from 'react'
import Landing from './Landing/landing'
import './main.scss'

/**
 * This is the main content container for home page.
 */

 const Main = props => {
   return (
     <div className='main-content-container'>
        <Landing />
     </div>
   )
 }

 export default Main