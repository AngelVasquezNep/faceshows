import React, { Component } from 'react';
import ChatItem from './Chat-item.jsx';

class Chat extends Component {
  render() {
    return (
      <div className="Chat">
        <ChatItem />
      </div>
    );
  }
}

export default Chat;
