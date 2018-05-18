import React from 'react'
import { Play, Pause } from './icon.js'

function PlayPuase (props) {
  return (
    <div>
      {
        !props.play ?  <Play {...props} /> : <Pause {...props} /> 
      }
    </div>
  )
}

export default PlayPuase