import React, {Component} from 'react'
import Item from './Relase-item'
import Api from '../Api-relase.json'
import '../css/Relase.css'


class ListItems extends Component {

  state = {
    active: 'Maratonicas'
  }

  handleClick = (id) => {
    this.setState({
      active:id
    })
  }

  render () {
    return (
    <div className="Relase--category">
      {
        Api.categories.map((item,index) => {
          return (
            <div key={index}>
  
              <p className="Relase--category-subtitle" >{item.title}</p>
              {
               item.list.map( i => {
                   return <Item
                     handleClick = {this.handleClick}
                     active = { this.state.active }
                     key={i.id}
                     id={i.id}
                     name={i.name}
                     img={i.img}
                   />
               })
              }
  
            </div>
          )
        })
      }
    </div>
    )
  }
}

export default ListItems
