import React from 'react'

const Button = props => (
  <button onClick = {props.handleClik} 
          className = {props.className}
  >
    {props.children}
  </button>
)

export default Button