import { useState } from 'react';
import socket from '../Socket';

function LoginForm({ setLogin, setUserName }) {
  const [fullName, setFullName] = useState('');
  const [loginMessage, setLogingMessage] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    // Login
    socket.emit('login', fullName);

    function onCheckUser(isUsing) {
      if (isUsing) {
        setLogingMessage('This username is already in use.');
      } else {
        setLogin(true);
        setUserName(fullName);
      }
    }

    socket.on('check user', onCheckUser);
  }

  return (
    <div className="column">
      <form onSubmit={handleLogin}>
        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="input" type="text" placeholder="Full name" required="required" pattern="([\w]+[ ]+[\w])\w+" autoFocus={true} />
            <p className={"help is-danger" + (loginMessage == null ? " is-hidden" : "")}>{loginMessage}</p>
          </div>

          <div className="control">
            <input className="button" type="submit" value="Login" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
