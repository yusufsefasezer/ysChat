import React from 'react';
import './styles/App.css';
import ChatHeader from './components/ChatHeader';
import ChatMain from './components/ChatMain';
import ChatFooter from './components/ChatFooter';

function App() {
  return (
    <div className="hero is-fullheight has-text-white is-unselectable is-size-6">
      <div className="hero-body">
        <div className="container">

          <ChatHeader title="ysChat - WebSocket Chat" />
          <ChatMain />
          <ChatFooter />

        </div>
      </div>
    </div>
  );
}

export default App;