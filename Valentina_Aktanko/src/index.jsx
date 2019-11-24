import React from 'react';
import ReactDom from 'react-dom';

import { App } from 'components/App';

const messages = ['Hello!', 'I am new to React.'];

const Message = (props) => <div>{props.text}</div>;
const MessageList = (props) => {
    return props.messages.map((message) => <Message text={message} />)
}

ReactDom.render (
    <App />,
    document.getElementById('root'), 
);