import { useEffect, useState } from 'react';
import socket from '../Socket';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function onGetOnlineUser(onlineUsers) {
      setUsers(onlineUsers);
    }

    function onNewUser(newUser) {
      setUsers([...users, newUser]);
    }

    // Get online user
    socket.on('get online user', onGetOnlineUser);

    // New user
    socket.on('new user', onNewUser);

    return () => {
      socket.off('get online user', onGetOnlineUser);
      socket.off('new user', onNewUser);
    }
  }, [users]);

  return (
    <div>
      <h2 className="has-text-centered is-size-6 is-marginless is-paddingless">Online ({users.length})</h2>
      <ul>
        {users.map((user, index) => <li key={index}>{user}</li>)}
      </ul>
    </div>
  );
}

export default UserList;
