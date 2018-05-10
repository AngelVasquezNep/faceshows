import React, {Component} from 'react'
import '../css/NoticiaItem.css'
import User from './User'

class NoticiaItem extends Component {

  handleItemClik = () => {
    this.props.handleClikItemFullScreen(this.props)
  }
  
  render () {
    return(
      <div className="NoticiaItem">
  
        <User 
            image={ this.props.album.images[0].url } 
            name={this.props.artists[0].name} 
          />
      
        <img className="NoticiaItem-img" 
          src={ this.props.album.images[0].url } 
          alt={this.props.album.name}
          onClick = { this.handleItemClik }
        />
        
        <p className="NoticiasItem-name"> {this.props.album.name} </p>
        
      </div>
    )
  }
}


export default NoticiaItem