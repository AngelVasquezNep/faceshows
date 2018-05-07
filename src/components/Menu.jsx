import React from 'react';
import '../css/app.css'
import '../css/Menu.css'
import Search from './Search-Container'
import logo from '../images/facebook.png'
import tv from '../images/tv.png'
import users from '../images/friends.png'
import message from '../images/message.png'
import world from '../images/world.png'
import help from '../images/help.png'
import triangle from '../images/triangle.png'

const Menu = props => (
  <div className="Menu-Container">
    <div className="Container Menu">
      <div className="Menu--buscador">
        <img className="Menu--logo"
          src={logo} alt="Logo"/>
        <Search/>
      </div>
      <div className="Dashboard">
        <a className="Usuario" href="/">
          <img src={tv} alt="TV" className="Usuario--img"/>
          <span className="Usuario-name">Angel</span>
        </a>
        <a className="Inicio" href="/">
          <span>Inicio</span>
        </a>
        <div className="Users" title="Solicitudes de Programas" >
            <img src={users} alt="Users"/>
        </div>
        <div className="Message" title="Mensajes" >
            <img src={message} alt="Message"/>
        </div>
        <div className="Noticias" title="Noticias" >
            <img src={world} alt="News"/>
        </div>
        <div className="Help" title="Ayuda Rápida">
            <img src={help} alt="Help"/>
        </div>
        <div className="Config" title="Configuración">
            <img src={triangle} alt="Configuración"/>
        </div>
      </div>
    </div>
  </div>
)

export default Menu