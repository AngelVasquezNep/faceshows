import React, {Component} from 'react';
import '../css/app.css'
import '../css/Menu.css'
import Search from './Search-Container'
// import logo from '../images/facebook.png'
import tv from '../images/tv.png'
import friends from '../images/friends.png'
import message from '../images/message.png'
import world from '../images/world.png'
import help from '../images/help.png'
import triangle from '../images/triangle.png'
import ContainerNotification from './ContainerNotification'
import NotificationMessage from './NotificationMessage'

const Logo = "/images/tickets.png"

class Menu extends Component {

  state = {
    Artistas: [],
    messages: [],
    noticias: [],
    typeNotification: '',
    isShowNotification: false
    
  }

  handleClickMenu = ev => {
    
    this.setState({
      typeNotification: ev.target.id,
      isShowNotification: true
    })
    
    if (this.menuItem === ev.target.id && this.state.isShowNotification) {
      this.setState({isShowNotification: false})
      console.log("Cerrar")
    }
    this.menuItem = ev.target.id
    
  }

  render() {

    return (

      <div className="Menu-Container">
        <div className="Container Menu">
          
          <div className="Menu--buscador">
            <img className="Menu--logo"
            src={Logo} alt="Logo"/>
      
            <Search
              handleSearch = {this.props.handleSearch}
            />
          
          </div>
          
          <nav className="Dashboard">
            
            <a className="Usuario" href="/">
              <img src={tv} alt="TV" className="Usuario--img"/>
              <span className="Usuario-name">Angel</span>
            </a>
            
            <a className="Inicio" href="/">
              <span>Inicio</span>
            </a>

            <div  className="Users" 
                  title="Solicitudes de Programas" 
                  onClick = { this.handleClickMenu } 
                  >
                  <img src={friends} alt="Friends" id="Artistas"/>
            </div>

            <div  className="Message" 
                  title="Mensajes" 
                  onClick = { this.handleClickMenu } 
                  >
                  <img src={message} alt="Message" id="Messages"/>
            </div>

            <div  className="Menu-Noticias"
                  title="Noticias"
                  onClick = { this.handleClickMenu } 
                  >
              <img src={world} alt="News" id="Noticias"/>
            </div>

            <div className="Help" title="Ayuda Rápida">
              <img src={help} alt="Help"/>
            </div>

            <div className="Config" title="Configuración">
              <img src={triangle} alt="Configuración"/>
            </div>

          
          </nav>
          {
            this.state.isShowNotification && 
            <ContainerNotification>
              
              <NotificationMessage
                typeNotification = {this.state.typeNotification}
              />
            
            </ContainerNotification>
          }
            
        
        </div>
      </div>
    )
  }
}


export default Menu