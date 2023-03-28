import React from 'react';
import ChatArea from './ChatArea';
import ChatSidebar from './ChatSidebar';

const ChatMain = () => {
  return (
    <main className="columns">
      <ChatArea />
      <ChatSidebar />
    </main>
  );
};

export default ChatMain;