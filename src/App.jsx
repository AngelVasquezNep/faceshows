import React, { Component } from 'react';
import AppContainer from './components/App-container.jsx'
import Menu from './components/Menu'
import Relase from './components/Relase'
import Container from './components/Container'
import Historias from './components/Historias';
import Noticias from './components/Noticias';




class App extends Component {
  render() {
    return (
      <AppContainer>
        <Menu/>
        <Container>
          <Relase/>
          
          <div>
            <Noticias/>
          </div>
          
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
