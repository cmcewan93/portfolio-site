import React from 'react'
import Landing from './Landing/landing'
import Bio from './Bio/bio'
import './main.scss'

/**
 * This is the main content container for home page.
 */

 const Main = props => {
   return (
     <div className='main-content-container'>
        <Landing />
        <Bio />
     </div>
   )
 }

 export default Main