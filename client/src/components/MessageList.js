import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

class MessageList extends Component {
  eachMessage(item, index) {
    return (
      <Message key={index} data={item} />
    );
  }
  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.messagelist).scrollTop = ReactDOM.findDOMNode(this.refs.messagelist).scrollHeight;
  }
  render() {
    return (
      <div ref="messagelist" className="columns is-multiline has-text-black has-background-white-bis messagelist" style={{ alignContent: 'flex-start' }}>
        {this.props.messages.map(this.eachMessage)}
      </div>
    );
  }
};

export default MessageList;