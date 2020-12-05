import React, { PureComponent } from 'react';
import AppContainer from './components/App-container.jsx';
import Menu from './components/Menu';
import Relase from './components/Relase';
import Container from './components/Container';
import RelaseRight from './components/Relase-right';
import Noticias from './components/Noticias';
import ModalContainer from './components/modalContainer';
import Modal from './components/Modal';
import ItemFullScreen from './components/ItemFullScreen';
import MessageContainer from './components/MessageContainer';
import { searchApi, listArtists, artistRandom } from './services/searchApi.js';


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
    console.info("VERSION: Catch API error")
    this.search();
  }

  componentDidCatch(error) {
    console.error(error)
    this.setState({ hasError: true })
  }

  search = (value) => {
    searchApi(value)
      .then((results) => {
        this.setState({
          resultados: results,
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
