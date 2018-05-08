import React from 'react'
import NoticiaItem from './Noticia-item.jsx'
// import Api from '../Api-noticias.json'

const Noticias = props => (
  <div className="Noticias-Container">
    <div className="Noticias">
      {
        props.resultados.map(item => <NoticiaItem {...item} />)
      }
    </div>
  </div>
)

export default Noticias;