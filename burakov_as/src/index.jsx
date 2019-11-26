import React from 'react';
import ReactDom from 'react-dom';

import { App } from 'components/App';

const messages = ['Привет, друг!', 'How are you doing?'];

const Message = (props) => <div>{props.text}</div>;
const MessageList = (props) => {
  return props.messages.map((message) => <Message text = {message} />)
}

ReactDom.render(
  <App />,
  document.getElementById('root'),
) 