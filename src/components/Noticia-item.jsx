import React from 'react'
import '../css/NoticiaItem.css'

const replaceText = (text) => {
  let textModifer
  textModifer = text.replace("<p>", "")
  textModifer = textModifer.replace("</p>", "")
  textModifer = textModifer.replace("<b>", "")
  textModifer = textModifer.replace("</b>", "")
  return textModifer
}

const NoticiaItem = props => (
  <div className="NoticiaItem">
    <img src={props.image.medium} alt={props.name}/>
    <p> {props.name} </p>
    <p> {props.id} </p>
    <p> { replaceText(props.summary) } </p>
  </div>
)

export default NoticiaItem