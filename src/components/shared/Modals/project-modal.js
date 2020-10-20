import React, {useState, useEffect} from 'react'
import Rodal from 'rodal'


import 'rodal/lib/rodal.css';
import './modal.scss'

const ProjectModal = ({hideModal, visible, project}) => {
  const styleObject = {
    width: '700px',
    height: '750px'
  }
  return ( 
      <Rodal
        className='project-modal'
        visible={visible} 
        onClose={() => {hideModal()}} 
        animation={'zoom'} 
        duration={600} 
        customStyles={styleObject}
       >
        <div className='modal-text-container'>
          <div className='modal-header'>
            <h1>{project.name}</h1>
            <h2>{project.subtext}</h2>
          </div>
          <div className='divider-line'/>
          <div className='project-description-container'>
            <p>
              {project.description}
            </p>
          </div>
          <div className='modal-footer'>
            <a className='project-button' href={project.url}>VIEW PROJECT</a>
          </div>
        </div>
      </Rodal>
  )
}

export default ProjectModal