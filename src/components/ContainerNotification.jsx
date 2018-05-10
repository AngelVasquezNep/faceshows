import React from 'react'
import '../css/ContainerNotification.css'

const ContainerNotification = props => (
  <div className="ContainerNotification">
    {props.children}
  </div>
)

export default ContainerNotification