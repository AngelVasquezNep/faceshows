import React from 'react'
import '../css/User.css'

const timeRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const User = props => (
  <div className="User" title={props.name} >
    <img src={props.image} alt={props.name}  className="User-img" />
    <div className="User-info">
      <a href="/" className="User-nombre"> {props.name} </a>
      <p className="User-tiempo"> Hace {timeRandom(2, 24)} horas </p>
    </div>
  </div>
)

export default User