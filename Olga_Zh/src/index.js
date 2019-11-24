import React from 'react';
import ReactDom from 'react-dom';

const messages = ['Hello!', 'What\'s up?'];
const Мessage = (props) => <div>{props.text}</div>;

const MessageList = (props) => {
    return props.messages.map((message) => <Message text={message} />)
}

ReactDom.render(
    <MessageList messages={messages} />,
    document.getElementById('root'),
);