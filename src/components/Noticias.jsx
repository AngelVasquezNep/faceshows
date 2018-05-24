import React from 'react'
import NoticiaItem from './Noticia-item.jsx'
import Spinner from './Spinner';

const Noticias = props => (
  <div className="Noticias-Container">

    <div className="Noticias">
      {
        props.errorResultados && (
          <h2>Lo sentimos, hubo un error con los datos, estamos trabajando para solucionarlo.</h2>
        ) 
      }

      {
        !props.resultados.length ? (

              <p>No hallamos la canción o artista que buscas</p>
          
            ) : (
          
              props.resultados.map(item => <NoticiaItem {...item} 
                                            handleClikItemFullScreen = {props.handleClikItemFullScreen}
                                            key={item.id}/>)
          
            )
      }

      { props.fetchLoadingNoticias && <Spinner/> }

    </div>
  </div>
)

export default Noticias;