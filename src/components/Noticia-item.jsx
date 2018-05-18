import React from 'react'
import '../css/NoticiaItem.css'
import User from './User'
import Megusta from './Megusta'
import {numberRandom} from '../services/functions'

const NoticiaItem = props => {

  const handleItemClik = () => {
    props.handleClikItemFullScreen(props)
  }

  return(
    <div className="NoticiaItem" >
      <div>
        <User 
            image={ props.album.images[0].url } 
            name={props.artists[0].name} 
            >
          <p className="User-tiempo"> Hace {numberRandom(2, 24)} horas </p>
        </User>

        <p className="NoticiasItem-name"> {props.album.name} </p>
      
        <img className="NoticiaItem-img" 
          src={ props.album.images[0].url } 
          alt={props.album.name}
          onClick = { handleItemClik }
          />
      </div>

      <Megusta/>
      
    </div>
  )
}


export default NoticiaItem