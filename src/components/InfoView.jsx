import React from 'react'

const InfoView = props => (
  <div className="InfoView">
    <span> Likes: {props.likes} </span>
    <span> Compartidos: {props.compartidos} </span>
  </div>
)

export default InfoView