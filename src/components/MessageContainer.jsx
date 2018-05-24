import React, {Component} from 'react'
import Modal from './modalContainer'
import Chat from './Chat'
import '../css/MessageContainer.css'

class MessageContainer extends Component{

  state = {
    isShow: false
  }
  width = { width: 200 }
  backgroundColor = { backgroundColor: '#0084ff', color: '#FFFFFF' }
  height = { height: 0 }
  none = {}

  handleClickShow = ev => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  setRef = element => {
    this.chat = element
  } 

  componentDidMount () {
    this.chat.scrollTop = this.chat.scrollHeight
  }
  render () {

    return (
      <Modal>
        <div className="MessageContainer"
            style = { !this.state.isShow ? this.width : this.none }
          >
          <div className="MessageContainer-title"
            style = { this.state.isShow ? this.backgroundColor : this.none }
            onClick = { this.handleClickShow }
          >
            <span>
              Hola
            </span>
          </div>
          <div className="MessageContainer-content"
            style = { !this.state.isShow ? this.height : this.none }
            ref = { this.setRef }
          >
            <Chat
            /> 
          </div>
        </div>
      </Modal>
    )
  }
}

export default MessageContainer