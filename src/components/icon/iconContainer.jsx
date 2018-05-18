import React from 'react'
import './icon.sass'

function Icon (props) {
  
  const { color, size } = props
  return (
    <div className="Icon">
      <button onClick={props.handleClick}>
        <svg
          fill={color}
          width={size}
          height={size}
          viewBox={ props.viewBox || "0 0 32 32"}
          >
          { props.children }
        </svg>
      </button>
    </div>
  )
}

export default Icon
