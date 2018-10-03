import React from 'react';

const Primary = (props) => {
  return (
    <div className="column is-12 is-paddingless primary">
      <strong className="is-block">{props.data.user}</strong>
      <div className="text">
        {props.data.text}
        <time className="is-block has-text-right">{props.data.time}</time>
      </div>
    </div>
  );
};

const Information = (props) => {
  return (
    <div className="column is-12 has-text-centered is-paddingless"><strong>{props.data.user}</strong> {props.data.text}</div>
  );
};

const Secondary = (props) => {
  return (
    <div className="column is-12 has-text-right is-paddingless is-clearfix secondary">
      <strong className="is-block">{props.data.user}</strong>
      <div className="text is-pulled-right">
        {props.data.text}
        <time className="is-block has-text-right">{props.data.time}</time>
      </div>
    </div>
  );
};

const Message = (props) => {
  let result = null;
  switch (props.data.type) {
    case 'primary':
      result = (<Primary data={props.data} />);
      break;
    case 'information':
      result = (<Information data={props.data} />);
      break;
    case 'secondary':
      result = (<Secondary data={props.data} />);
      break;
    default:
      console.log('Grrr');
      break;
  }

  return result;
};

export default Message;