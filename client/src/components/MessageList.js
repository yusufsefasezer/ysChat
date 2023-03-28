import { useEffect, useRef } from 'react';
import Message from './Message';

function MessageList({ messages }) {
  const ref = useRef(null);

  useEffect(() => {
    const messagelist = ref.current;
    messagelist.scrollTop = messagelist.scrollHeight;
  });

  return (
    <div ref={ref} className="columns is-multiline has-text-black has-background-white-bis messagelist" style={{ alignContent: 'flex-start' }}>
      {messages.map((message, index) => <Message key={index} data={message} />)}
    </div>
  );
}
export default MessageList;
