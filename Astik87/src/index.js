import React from 'react';
import ReactDom from 'react-dom';

const messages = [['Astik','Hello!'],['Иван', 'Привет']];

const Message = (props) => <div><h3>{props.name}:</h3>{props.text}</div>;
const MessageList = (props) => {
  return props.messages.map((message) => <Message text = {message[1]} name={message[0]} />)
}

ReactDom.render(
  <MessageList messages={messages} />,
  document.getElementById('react'),
) 