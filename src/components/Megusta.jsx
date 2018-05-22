import React, {Component} from 'react'
import Button from './Button'
import {Like, Chat, Share} from './icon/icon'
import '../css/Button.css'
import '../css/Megusta.css'

class Megusta extends Component {
  render () {
    return (
      <div className="Megusta">

        <div className="Megusta--info">
          <p> {this.props.likes} me gusta </p>
          <p> {this.props.compartidos} veces compartido </p>
        </div>
        
        <div className="Megusta--botones">
          <div className="Megusta--like">
            <Like
              viewBox="0 0 155.123 155.123"
              fill = "#393939"
              size = { 20 }
              value = "Me gusta"
              />
          </div>
          <div className="Megusta--comentarios">
            <Chat
              viewBox="0 0 65 60"
              fill = "#393939"
              size = { 17 }
              value = "Comentarios"
            />
          </div>
          <div className="Megusta--compartir">
            <Share
              fill = "#393939"
              size = { 17 }
              value = "Compartir"
            />
          </div>
        </div>

      </div>
    )
  }
}


export default Megusta;