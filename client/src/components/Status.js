import { useEffect, useState } from 'react';
import socket from '../Socket';

function Status() {
  const [status, setStatus] = useState('info');
  const [text, setText] = useState('Connecting...');

  useEffect(() => {
    function onConnect() {
      setStatus('success');
      setText('Connection established.');
    }

    function onError(error) {
      setStatus('danger');
      setText(error.message);
    }

    // Connect
    socket.on('connect', onConnect);

    // Connect error
    socket.on('connect_error', onError);

    return () => {
      socket.off('connect');
      socket.off('connect_error');
    };
  }, []);

  return (
    <small>Status: <span className={"has-text-" + (status)}>{text}</span></small>
  );
}

export default Status;
