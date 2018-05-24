import React, {Component} from 'react'
import Spinner from './Spinner'
import User from './User'
import '../css/Historias.css'

import {searchApi, apiArtistas} from '../services/searchApi.js'



class Historias extends Component {
  
  state = {
    loading: true,
    users: [],
    error: false
  }
  
  componentWillMount () {
    searchApi(apiArtistas, 3)
    .then( json =>{
      this.setState({
        users: json.tracks.items,
        loading: false
      })
      console.log(json)
    })
    .catch(err =>{
        this.setState({
          error: true
        })
    })
  }

  render () {
    return (
      <div className="Historias">
        <h4>Historias</h4>
        { this.state.error && <p>Lo sentimos, hubo un error</p> }
        { this.state.loading && <Spinner/>}
        {
          this.state.users.map((item,index) =>{
            return  <li key={item.id} className="NotificationMessage-body-item">
                    
                    <User 
                      image={ item.album.images[0].url } 
                      name={item.artists[0].name}
                      Width = '100%'
                      >
                      <span>{item.album.name}</span>
                    </User>
                  </li>
          })
        }
      </div>
    )
  }
}

export default Historias