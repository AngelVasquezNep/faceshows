import React, { PureComponent } from 'react';
import AppContainer from './components/App-container.jsx'
import Menu from './components/Menu'
import Relase from './components/Relase'
import Container from './components/Container'
import Historias from './components/Historias';
import Noticias from './components/Noticias';
import Api from './Api-noticias.json'
// https://www.tvmaze.com/api

// https://www.behance.net/dev/apps/42679?success=1
// https://www.behance.net/dev/
// API KEY / CLIENT ID ppkVaq40VH8OlOVeifEokl6VmZfBSY8h

class App extends PureComponent {

  state = {
    resultados: [],
    errorResultados: false
  }

  componentDidMount () {
    fetch('http://api.tvmaze.com/shows?page=1')
    .then(res => res.json())
    .then(json => {
      this.setState({
        resultados: json,
        errorResultados: false
      })
    })
    .catch(error => {
      this.setState({
        errorResultados: true
      })
    })
  }

  render() {
    return (
      <AppContainer>
        <Menu/>
        <Container>
          <Relase/>
          
            <Noticias resultados = { this.state.resultados } 
                      errorResultados = {this.state.errorResultados}
                      />
          
            <Historias />
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
