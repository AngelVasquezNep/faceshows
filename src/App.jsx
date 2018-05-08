import React, { PureComponent } from 'react';
import AppContainer from './components/App-container.jsx'
import Menu from './components/Menu'
import Relase from './components/Relase'
import Container from './components/Container'
import Historias from './components/Historias';
import Noticias from './components/Noticias';
import Api from './Api-noticias.json'
// https://www.tvmaze.com/api


class App extends PureComponent {

  state = {
    resultados: []
  }

  componentDidMount () {
    fetch('http://api.tvmaze.com/shows?page=1')
    .then(res => res.json())
    .then(json => {
      this.setState({
        resultados: json
      })
    })
  }

  render() {
    return (
      <AppContainer>
        <Menu/>
        <Container>
          <Relase/>
          
            <Noticias resultados = { this.state.resultados }/>
          
            <Historias/>
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
