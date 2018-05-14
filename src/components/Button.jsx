import React from 'react'

const Button = props => (
  <button onClick = {props.handleClik} 
          className = {props.className}
  >
    {props.value}
  </button>
)

export default Button