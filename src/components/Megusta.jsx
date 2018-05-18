import React, {Component} from 'react'
import Button from './Button'
import '../css/Button.css'
import '../css/Megusta.css'

class Megusta extends Component {
  render () {
    return (
      <div className="Megusta">
        <div className="Megusta--like">
          <Button className ="btn transparent" >
            Me gusta
          </Button>
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