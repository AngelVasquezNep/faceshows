import React from 'react'
import '../css/AceptarAmistad.css'
import '../css/Button.css'

const AceptarAmistad = props => {

  const {deleteElement, index} = props

  const handleClik = () => {
    deleteElement(index)
  }

  return (
    <div className="AceptarAmistad">
      <button className="btn Confirmar" 
              onClick = {handleClik}
              > Aceptar </button>
      <button className="btn transparent Eliminar" 
              onClick = {handleClik}
              > Eliminar Solicitud </button>
    </div>
  )
}

export default AceptarAmistad