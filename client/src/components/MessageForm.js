import { useEffect, useRef } from 'react';
import { useMessagesDispatch } from '../contexts/MessagesContext';
import socket from '../Socket';

function MessageForm({ fullName }) {
  const textareaRef = useRef(null);
  const emojiRef = useRef(null);
  const dispatch = useMessagesDispatch();

  const checkSubmit = (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.keyCode === 13 || e.keyCode === 10)) {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    let textarea = textareaRef.current;

    socket.emit('send message', {
      user: fullName,
      text: textarea.value
    });

    dispatch({
      type: 'newmessage',
      message: {
        type: 'primary',
        user: fullName,
        text: textarea.value
      }
    });

    textarea.value = '';
  }

  const appendEmoji = (e) => {
    let emoji = e.target.textContent;
    const textarea = textareaRef.current;
    textarea.value += emoji;
  }

  useEffect(() => {
    let fragment = document.createDocumentFragment();
    let emojRange = [[128513, 128591], [128640, 128704]];

    for (let i = 0, length = emojRange.length; i < length; i++) {
      let range = emojRange[i];
      for (let x = range[0]; x < range[1]; x++) {
        let newEmoji = document.createElement('button');
        newEmoji.className = 'button is-white is-paddingless is-medium'
        newEmoji.innerHTML = '&#' + x + ';';
        newEmoji.addEventListener('click', appendEmoji);
        fragment.appendChild(newEmoji);
      }
    }

    emojiRef.current.appendChild(fragment);
  }, []);

  return (
    <>
      <div className="column is-paddingless">
        <textarea ref={textareaRef} autoFocus={true} className="textarea is-shadowless" rows="2" placeholder="Type a message" onKeyDown={checkSubmit}></textarea>
      </div>

      <div className="column is-2-mobile is-1-tablet is-paddingless">

        <div className="emoji-wrapper">
          <button className="button is-medium is-paddingless is-white" id="Emoji">
            <i className="far fa-smile"></i>
          </button>
          <div ref={emojiRef} id="EmojiList" className="popover has-background-white"></div>
        </div>

        <button className="button is-medium is-paddingless is-white" onClick={handleSubmit}><i className="far fa-paper-plane"></i></button>
      </div>
    </>
  );
}

export default MessageForm;
