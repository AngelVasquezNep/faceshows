import React from 'react'
import '../css/NoticiaItem.css'
import User from './User'

const replaceText = (text) => {
  let textModifer
  textModifer = text.replace("<p>", "")
  textModifer = textModifer.replace("</p>", "")
  textModifer = textModifer.replace("<b>", "")
  textModifer = textModifer.replace("</b>", "")
  textModifer = textModifer.replace("<i>", "")
  textModifer = textModifer.replace("</i>", "")
  return textModifer
}

const NoticiaItem = props => (
  <div className="NoticiaItem">
    <User image={ props.album.images[0].url } name={props.artists[0].name} />
    <img className="NoticiaItem-img" src={ props.album.images[0].url } alt={props.album.name}/>
    <p className="NoticiasItem-name"> {props.album.name} </p>
  </div>
)

export default NoticiaItem