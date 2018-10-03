import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import socket from '../Socket';

class ChatArea extends Component {
  state = {
    messages: []
  }
  addMessage(message) {
    let newMessages = this.state.messages;
    if (newMessages.length > 35) newMessages.shift();
    newMessages.push(message);
    this.setState({ messages: newMessages })
  }
  componentDidMount() {

    // New user
    socket.on('new user', (fullname) => {
      this.addMessage({
        type: 'information',
        user: fullname,
        text: 'logged in.',
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
      });
    });

    // Exit user
    socket.on('exit user', (fullname) => {
      this.addMessage({
        type: 'information',
        user: fullname,
        text: 'left.',
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
      });
    });

    // New message
    socket.on('new message', (message) => {
      this.addMessage({
        type: 'secondary',
        user: message.user,
        text: message.text,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
      });
    });
  }
  render() {
    return (
      <section className="column">
        <MessageList messages={this.state.messages} />
        <MessageForm onAddMessage={this.addMessage.bind(this)} />
      </section>
    );
  }
};

export default ChatArea;