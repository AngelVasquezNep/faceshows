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
import {searchApi, listArtists, artistRandom, apiArtistas, apiMessages, apiNoticias} from '../services/searchApi'

const Logo = "/images/tickets.png"

class Menu extends Component {

  itemMenuDashboard = [
    {
      className: "Users",
      title: "Solicitudes de Artistas",
      img: friends,
      alt: "Friends",
      id: "Artistas"
    },
    {
      className: "Message",
      title: "Mensajes",
      img: message,
      alt: "Message",
      id: "Messages"
    },
    {
      className: "Menu-Noticias",
      title: "Noticias",
      img: world,
      alt: "News",
      id: "Noticias"
    }
  ]

  state = {
    notificaciones: [],
    Artistas: [],
    Messages: [],
    Noticias: [],
    typeNotification: '',
    isShowNotification: false,
    triangleRight: 0
  }

  search = (value, type) => {
    console.log("Busqueda: " + value )

    searchApi(value)
    .then(json => {
      if(type === 'Artistas') this.setState({ 
        Artistas: json.tracks.items,
        notificaciones: json.tracks.items
      })
      else if(type === 'Messages') this.setState({ 
        Messages: json.tracks.items,
        notificaciones: json.tracks.items
      })
      else if(type === 'Noticias') this.setState({ 
        Noticias: json.tracks.items,
        notificaciones: json.tracks.items
      })
    })
    .catch(error => {
      console.log("LO SENTIMOS, TUVIMOS UN ERROR: " + error)
      this.setState({
        // fetchLoadingNoticias: false,
        // errorResultados: true
      })
    })
  }

  artist = artistRandom(listArtists) 

  handleClickMenu = ev => {

    this.setState({
      typeNotification: ev.target.id,
      isShowNotification: true
    })

    if (this.menuItem === ev.target.id && this.state.isShowNotification) {
      this.setState({isShowNotification: false})
    }

    if (ev.target.id === 'Artistas') {
      if(this.state.typeNotification !== ev.target.id) this.search(apiArtistas, ev.target.id)
      this.setState({ triangleRight: 155 })
    }
    
    else if (ev.target.id === 'Messages') {
      if(this.state.typeNotification !== ev.target.id) this.search(apiMessages, ev.target.id)
      this.setState({ triangleRight: 115 })
    }
    
    else if (ev.target.id === 'Noticias') {
      if(this.state.typeNotification !== ev.target.id) this.search(apiNoticias, ev.target.id)
      this.setState({ triangleRight: 75 })
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

            {
              this.itemMenuDashboard.map( item =>{
                return  <div className={item.className}
                          style= {{ position: 'Relative' }}
                          title = {item.title}
                          onClick = {this.handleClickMenu}
                          key={item.id}
                        >
                        <img src={item.img} alt={item.alt} id={item.id}/>
                      {
                        this.state.isShowNotification && this.state.typeNotification === item.id &&
                        <div className="NotificationMessage-cuadrado"
                              style={{ right: 5 }}
                        ></div>
                      }
                </div>
              })
            }

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
              {

                <NotificationMessage
                  notificaciones = {this.state.notificaciones}
                  typeNotification = {this.state.typeNotification}
                />
              }

            </ContainerNotification>
          }

        </div>
      </div>
    )
  }
}


export default Menu