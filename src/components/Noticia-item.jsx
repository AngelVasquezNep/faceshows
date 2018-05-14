import React from 'react'
import '../css/NoticiaItem.css'
import User from './User'
import {numberRandom} from '../services/functions'

const NoticiaItem = props => {

  const handleItemClik = () => {
    props.handleClikItemFullScreen(props)
  }

  return(
    <div className="NoticiaItem" >

      <User 
          image={ props.album.images[0].url } 
          name={props.artists[0].name} 
      >
        <p className="User-tiempo"> Hace {numberRandom(2, 24)} horas </p>
      </User>
    
      <img className="NoticiaItem-img" 
        src={ props.album.images[0].url } 
        alt={props.album.name}
        onClick = { handleItemClik }
      />
      
      <p className="NoticiasItem-name"> {props.album.name} </p>
      
    </div>
  )
}


export default NoticiaItem