import React, {useState, useEffect} from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';
import './modal.scss'

const Modal = ({showModal, hideModal, visible}) => {
  return ( 
      <Rodal visible={visible} onClose={() => {hideModal()}} animation={'rotate'} duration={600}>
        <div>Content</div>
      </Rodal>
  )
}

export default Modal