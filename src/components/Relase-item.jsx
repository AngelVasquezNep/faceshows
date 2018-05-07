import React, {Component} from 'react'
import '../css/Relase.css'

class Item extends Component {
  
  handleClick = ev => {
    this.props.handleClick(this.props.id)
  }
  
  render () {
    return (
    <div 
      onClick={this.handleClick}
      className={"Relase--item" + " " + (this.props.active === this.props.id ? "active" : "" ) } 
      title={this.props.name}
      >
      <img src={this.props.img} alt={this.props.name} />
      <p> {this.props.name} </p>
    </div>
    )
  }
}


export default Item