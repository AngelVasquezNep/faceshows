import React from 'react'

const lorem = "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo)."

let texts = []

const createText = (caja, text) => {
  for (let i = 0; i < 10; i++) {
    caja[i] = text
  }
}
createText(texts, lorem);


const Noticias = props => (
  <div className="Noticias-Container">
    <div className="Noticias">
    {
      texts.map( (tex, index) => {
        return <p key={index} > {tex} </p>
      })
    }
    </div>
  </div>
)

export default Noticias;