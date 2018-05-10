import React from 'react'
import NoticiaItem from './Noticia-item.jsx'
import Spinner from './Sppiner';
// import Api from '../Api-noticias.json'

const Noticias = props => (
  <div className="Noticias-Container">
    <div className="Noticias">
      {
        props.errorResultados && (<h2>Lo sentimos, hubo un error con los datos, estamos trabajando para solucionarlo.</h2>) 
      }
      {
        props.resultados.map(item => <NoticiaItem {...item} key={item.id}/>)
      }
      {
        props.fetchLoadingNoticias && <Spinner/>
      }
    </div>
  </div>
)

export default Noticias;