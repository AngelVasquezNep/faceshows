import React, { Component } from 'react';
import AppContainer from './components/App-container.jsx'
import Menu from './components/Menu'
import Relase from './components/Relase'
import Container from './components/Container'
import Historias from './components/Historias';


// Para la sección de noticias podemos ponerle un paddin top de tal forma que el scroll se tome desde lo alto


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Menu/>
        <Container>
          <Relase/>
          <div></div>
          <div>
            <Historias/>
          </div>
        </Container>
        {/* Menú-Buscador */}
          {/* Relase - Grupos */}
          {/* Noticias */}
          {/* Relise - Right */}
            {/* Historias */}
            {/* Cosas */}
            {/* Footer */}
          {/* Chat */}
      </AppContainer>
    )
  }
}

export default App;
