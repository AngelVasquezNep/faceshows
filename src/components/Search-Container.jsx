import React, { Component } from 'react';
import Search from './Search';

class SearchContainer extends Component {
  state = {
    value: ''
  };

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.handleSearch(this.state.value);

    this.input.value !== '' &&
      this.setState({
        value: ''
      });
  };

  setInputRef = (element) => {
    this.input = element;
  };

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <Search
        setInput={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
        placeHolder="Busca tu artista favorito"
      />
    );
  }
}

export default SearchContainer;
