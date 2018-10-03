import React from 'react';
import UserList from './UserList';

const ChatSidebar = () => {
  return (
    <aside className="column is-2 is-hidden-mobile has-background-light has-text-black">
      <UserList />
    </aside>
  );
};

export default ChatSidebar;