import React, { Component } from 'react';
import socket from '../Socket';

class UserList extends Component {
  state = {
    users: []
  }
  eachUser(user, index) {
    return (
      <li key={index}>{user}</li>
    );
  }
  addUser(user) {
    let newList = this.state.users;
    newList.push(user);
    this.setState({ users: newList });
  }
  componentDidMount() {
    // Get online user
    socket.on('get online user', (onlineUsers) => {
      this.setState({
        users: onlineUsers
      });
    });
    // New user
    socket.on('new user', (fullname) => {
      this.addUser(fullname);
    });
  }
  render() {
    return (
      <div>
        <h2 className="has-text-centered is-size-6 is-marginless is-paddingless">Online ({this.state.users.length})</h2>
        <ul>
          {this.state.users.map(this.eachUser)}
        </ul>
      </div>
    );
  }
};

export default UserList;