import React, { PureComponent } from 'react';
import AppContainer from './components/App-container.jsx'
import Menu from './components/Menu'
import Relase from './components/Relase'
import Container from './components/Container'
import Historias from './components/Historias';
import Noticias from './components/Noticias';
import ModalContainer from './components/modalContainer';
import Modal from './components/Modal';
import ItemFullScreen from './components/ItemFullScreen';

//simport Api from './Api-noticias.json'
// https://www.tvmaze.com/api

// https://www.behance.net/dev/apps/42679?success=1
// https://www.behance.net/dev/
// API KEY / CLIENT ID ppkVaq40VH8OlOVeifEokl6VmZfBSY8h

class App extends PureComponent {
  
  searchApi = (value) => {
    fetch(`https://platzi-music-api.now.sh/search?type=track&query=${value}`)
    .then(res => res.json() )
    .then(json => {
      this.setState({
        resultados: json.tracks.items,
        fetchLoadingNoticias: false,
        errorResultados: false
      })
    })
    .catch(error => {
      console.log("LO SENTIMOS, TUVIMOS UN ERROR: " + error)
      this.setState({
        fetchLoadingNoticias: false,
        errorResultados: true
      })
    })
  } 
  
  
  state = {
    resultados: [],
    fetchLoadingNoticias: true,
    errorResultados: false,
    isItemFullScreen: false,
    itemFullScreen: {}
  }
  
  componentDidMount () {
    this.searchApi("Luis")
    
    window.addEventListener("keyup", (ev)=> {
      const keyScape = 27
      ev.keyCode === keyScape && this.closeModal()
    })
 
  }
  
  handleSearch = ( value )  => {
    this.searchApi(value)
  }
  
  handleClikItemFullScreen = item => {

    
    
    this.setState({
      itemFullScreen: item,
      isItemFullScreen: true
    })
    
  }
  
  closeModal = () => {

    this.setState({
      isItemFullScreen: false
    })
  }

  render() {
    return (
      <AppContainer>
        
        <Menu
            handleSearch = { this.handleSearch }
        />
        
        <Container>
          <Relase/>
          
            <Noticias resultados = { this.state.resultados } 
                      fetchLoadingNoticias = { this.state.fetchLoadingNoticias }
                      errorResultados = {this.state.errorResultados}
                      handleClikItemFullScreen = {this.handleClikItemFullScreen}
                      />
          
            <Historias />
        </Container>
        
        {
          this.state.isItemFullScreen &&
          <ModalContainer>
            <Modal
              handleClick = { this.closeModal }
            >
              <ItemFullScreen
                item = { this.state.itemFullScreen }
                />
            </Modal>
          </ModalContainer>
        }
        
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
