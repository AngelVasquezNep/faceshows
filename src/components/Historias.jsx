import React, { Component } from 'react';
import Spinner from './Spinner';
import User from './User';
import '../css/Historias.css';

import { searchApi, apiArtistas } from '../services/searchApi.js';

class Historias extends Component {
  state = {
    loading: true,
    users: [],
    error: false
  };

  componentWillMount() {
    searchApi(apiArtistas, 3)
      .then((results) => {
        this.setState({
          users: results.slice(0, 5),
          loading: false
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: true
        });
      });
  }

  render() {
    return (
      <div className="Historias">
        <h4>Historias</h4>
        {this.state.error && <p>Lo sentimos, hubo un error</p>}
        {this.state.loading && <Spinner />}
        {this.state.users.map((item, index) => {
          return (
            <li key={item.id} className="NotificationMessage-body-item">
              <User image={item.image} name={item.name} Width="100%">
                <span>{item.name}</span>
              </User>
            </li>
          );
        })}

        {this.state.users.length === 0 && <p>Sin Historias</p>}
      </div>
    );
  }
}

export default Historias;
