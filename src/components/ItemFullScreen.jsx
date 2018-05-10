import React from 'react'
import '../css/ItemFullScreen.css'

const ItemFullScreen = props => (
  <div className="ItemFullScreen" 
  >
    <div className="ItemFullScreen-background"
      style={{ backgroundImage: 'url(' + props.item.album.images[0].url + ')' }} 
    >
    </div>

    <div className="ItemFullScreen-content">
    
      <img className="ItemFullScreen-img" 
          src={ props.item.album.images[0].url } 
          alt={props.item.album.name}
          />


      <div className="ItemFullScreen-info">
        <h1>{props.item.album.name}</h1>
        <h2 className="ItemFullScreen-title"> {props.item.artists[0].name} </h2>
      </div>
    
    </div>

  </div>
)

export default ItemFullScreen