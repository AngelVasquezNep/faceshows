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
    <User image={props.image.original} name={props.name} />
    <img className="NoticiaItem-img" src={props.image.original} alt={props.name}/>
    <p className="NoticiasItem-name"> {props.name} </p>
    <p className="NoticiasItem-summary"> { replaceText(props.summary) } </p>
  </div>
)

export default NoticiaItem