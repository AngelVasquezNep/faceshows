import React from 'react';
import '../css/User.css';

const User = (props) => (
  <div className="User" title={props.name}>
    <img src={props.image} alt={props.name} className="User-img" />
    <div className="User-info" style={{ maxWidth: props.Width }}>
      <a href="/" className="User-nombre">
        {' '}
        {props.name}{' '}
      </a>
      {props.children}
      {/* <p className="User-tiempo"> Hace {timeRandom(2, 24)} horas </p> */}
    </div>
  </div>
);

export default User;
