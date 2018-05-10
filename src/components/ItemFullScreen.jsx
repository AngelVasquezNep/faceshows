import React from 'react'

const ItemFullScreen = props => (
  <div className="ItemFullScreen">
    <img className="NoticiaItem-img" 
         src={ props.item.album.images[0].url } 
         alt={props.item.album.name}
         />
  </div>
)

export default ItemFullScreen