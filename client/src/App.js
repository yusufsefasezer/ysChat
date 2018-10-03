import React from 'react';
import './Styles/App.css';
import ChatHeader from './Components/ChatHeader';
import ChatMain from './Components/ChatMain';
import ChatFooter from './Components/ChatFooter';

const App = () => {
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
};

export default App;