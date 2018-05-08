import React from 'react'
import NoticiaItem from './Noticia-item.jsx'
import Api from '../Api-noticias.json'

const Noticias = props => (
  <div className="Noticias-Container">
    <div className="Noticias">
      <NoticiaItem {...Api}/>
    </div>
  </div>
)

export default Noticias;