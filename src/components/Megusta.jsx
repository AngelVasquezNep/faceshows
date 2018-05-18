import React, {Component} from 'react'
import InfoView from './InfoView'
import Button from './Button'
import {Like} from './icon/icon'
import '../css/Button.css'
import '../css/Megusta.css'

class Megusta extends Component {
  render () {
    return (
      <div className="Megusta">

        <InfoView likes = {this.props.likes} 
                  compartidos = {this.props.compartidos}
                  />

        <div className="Megusta--like">
          <Like
            viewBox="0 0 155.123 155.123"
            fill = "#393939"
            size = { 25 }
            value = "Me gusta"
          />
        </div>
        <div className="Megusta--comentarios">
          <Button className ="btn transparent" >
            Comentar
          </Button>
        </div>
        <div className="Megusta--compartir">
          <Button className ="btn transparent" >
            Compartir
          </Button>
        </div>
      </div>
    )
  }
}


export default Megusta;