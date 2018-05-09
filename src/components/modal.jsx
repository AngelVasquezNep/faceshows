import React from 'react'
import './modal.sass'

function Modal (props) {
  return (
    <div className="Modal">
      { props.children }
      {
        props.botonVisible && (
          <button className="Modal-close" onClick={props.handleClick} >&times;</button>
        )
      }
    </div>
  )
}

export default Modal