import React from 'react'
import '../css/User.css'

const User = props => (
  <div className="User">
    <img src={user1} alt="user"  className="User-img" />
    <div className="User-info">
      <a href="/" className="User-nombre"> User 1 </a>
      <p className="User-tiempo"> Hace 2 horas </p>
    </div>
  </div>
)

export default User