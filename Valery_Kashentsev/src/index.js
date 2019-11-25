import React from 'react';
import ReactDom from 'react-dom';

const element = <h2 className="testclass">New test</h2>;

  const arr = ['Text1', 'Text2'];

  const Message = (props) => <h3>{props.text}</h3>;
  const MessageList = (props) => {
    return props.messages.map((message) => <Message text={message}/>)
  };

ReactDom.render(
  element,
  document.getElementById('root')
);

ReactDom.render(
  <Message text = "Some text here" />,
  document.getElementById('root')
);

ReactDom.render(
  <MessageList messages = {arr} />,
  document.getElementById('root')
);