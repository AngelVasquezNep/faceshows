import React, { PureComponent } from 'react';
import AppContainer from './components/App-container.jsx';
import Menu from './components/Menu';
import Relase from './components/Relase';
import Container from './components/Container';
// import Historias from './components/Historias';
import RelaseRight from './components/Relase-right';
import Noticias from './components/Noticias';
import ModalContainer from './components/modalContainer';
import Modal from './components/Modal';
import ItemFullScreen from './components/ItemFullScreen';
import MessageContainer from './components/MessageContainer';
import { searchApi, listArtists, artistRandom } from './services/searchApi.js';

//simport Api from './Api-noticias.json'
// https://www.tvmaze.com/api

// https://www.behance.net/dev/apps/42679?success=1
// https://www.behance.net/dev/
// API KEY / CLIENT ID ppkVaq40VH8OlOVeifEokl6VmZfBSY8h

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      resultados: [],
      fetchLoadingNoticias: true,
      errorResultados: false,
      isItemFullScreen: false,
      itemFullScreen: {}
    };
  }

  componentDidMount() {
    this.search(artistRandom(listArtists));
  }

  componentDidCatch(error) {
    console.error(error)
    this.setState({ hasError: true })
  }

  search = (value) => {
    searchApi(value)
      .then((json) => {
        console.log({ json })
        this.setState({
          resultados: json.tracks.items,
          fetchLoadingNoticias: false,
          errorResultados: false
        });
      })
      .catch((error) => {
        console.log('LO SENTIMOS, TUVIMOS UN ERROR: ' + error);
        this.setState({
          fetchLoadingNoticias: false,
          errorResultados: true
        });
      });
  };

  togleScapeEvent = (ev) => {
    const keyScape = 27;
    ev.keyCode === keyScape && this.closeModal();
  };

  handleSearch = (value) => {
    this.search(value);
  };

  handleClikItemFullScreen = (item) => {
    window.addEventListener('keyup', this.togleScapeEvent);

    this.setState({
      itemFullScreen: item,
      isItemFullScreen: true
    });
  };

  closeModal = () => {
    window.removeEventListener('keyup', this.togleScapeEvent);
    this.setState({
      isItemFullScreen: false
    });
  };

  render() {
    if (this.state.hasError) {
      <AppContainer>
        <h1>Tuvimos un error</h1>
      </AppContainer>
    }

    return (
      <AppContainer>
        <Menu handleSearch={this.handleSearch} />

        <Container>
          <Relase handleSearch={this.handleSearch} />

          <Noticias
            resultados={this.state.resultados}
            fetchLoadingNoticias={this.state.fetchLoadingNoticias}
            errorResultados={this.state.errorResultados}
            handleClikItemFullScreen={this.handleClikItemFullScreen}
          />

          <RelaseRight />
        </Container>

        {this.state.isItemFullScreen && (
          <ModalContainer>
            <Modal handleClick={this.closeModal}>
              <ItemFullScreen item={this.state.itemFullScreen} />
            </Modal>
          </ModalContainer>
        )}

        <MessageContainer />
      </AppContainer>
    );
  }
}

export default App;
