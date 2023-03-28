import { useEffect, useState } from 'react';
import { useMessages, useMessagesDispatch } from '../contexts/MessagesContext';
import socket from '../Socket';
import LoginForm from './LoginForm';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

function ChatArea() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const messages = useMessages();
  const dispatch = useMessagesDispatch();

  useEffect(() => {

    function onNewUser(newUser) {
      dispatch({
        type: 'newmessage',
        message: {
          type: 'information',
          user: newUser,
          text: 'logged in.'
        }
      })
    }

    function onExitUser(exitUser) {
      dispatch({
        type: 'newmessage',
        message: {
          type: 'information',
          user: exitUser,
          text: 'left.'
        }
      })
    }

    function onNewMessage(message) {
      dispatch({
        type: 'newmessage',
        message: {
          type: 'secondary',
          user: message.user,
          text: message.text
        }
      })
    }

    // New user
    socket.on('new user', onNewUser);

    // Exit user
    socket.on('exit user', onExitUser);

    // New message
    socket.on('new message', onNewMessage);

    return () => {
      socket.off('new user', onNewUser);
      socket.off('exit user', onExitUser);
      socket.off('new message', onNewMessage);
    }
  }, [dispatch]);

  return (
    <section className="column">
      <MessageList messages={messages} />
      <div className="columns is-mobile has-background-white is-paddingless has-text-centered messageform">
        {!isLogin && <LoginForm setLogin={setIsLogin} setUserName={setUserName} />}
        {isLogin && <MessageForm fullName={userName} />}
      </div>
    </section>
  );
}

export default ChatArea;
