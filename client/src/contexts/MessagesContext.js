import { createContext, useContext, useReducer } from 'react';

const MessageContext = createContext(null);
const MessageDispatchContext = createContext(null);

export function MessagesProvider({ children }) {
  const [messages, dispatch] = useReducer(messagesReducer, initialMessages);

  return (
    <MessageContext.Provider value={messages}>
      <MessageDispatchContext.Provider value={dispatch}>
        {children}
      </MessageDispatchContext.Provider>
    </MessageContext.Provider>
  );
}

export function useMessages() {
  return useContext(MessageContext)
}

export function useMessagesDispatch() {
  return useContext(MessageDispatchContext);
}

function messagesReducer(messages, action) {
  switch (action.type) {
    case 'newmessage':
      return [...messages, {
        ...action.message,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
      }]
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

const initialMessages = [];
