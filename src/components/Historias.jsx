import React from 'react'
import '../css/Historias.css'
import user1 from '../images/users/user1.png'
import user2 from '../images/users/user2.png'
import user3 from '../images/users/user3.png'

const Historias = props => (
  <div className="Historias">
    <h4>Historias</h4>

    <div className="Historias--user">
      <img src={user1} alt="user"  className="Historias-img" />
      <div className="Historias-info">
        <a href="#" className="Historias-nombre"> User 1 </a>
        <p className="Historias-tiempo"> Hace 2 horas </p>
      </div>
    </div>

    <div className="Historias--user">
      <img src={user2} alt="user" className="Historias-img" />
      <div className="Historias-info">
        <a href="#" className="Historias-nombre"> User 2 </a>
        <p className="Historias-tiempo"> Hace 20 minutos </p>
      </div>
    </div>

    <div className="Historias--user">
      <img src={user3} alt="user" className="Historias-img" />
      <div className="Historias-info">
        <a href="#" className="Historias-nombre"> User 3 </a>
        <p className="Historias-tiempo"> Hace 45 minutos </p>
      </div>
    </div>

  </div>
)

export default Historias