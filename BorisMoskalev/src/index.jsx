
import React from 'react';
import ReactDom from 'react-dom';
import { App } from 'components/App'

ReactDom.render(
    <App />,
    document.getElementById('root'),
);
// const element = React.createElement(
//     'h1',
//     {className:'root-h1'},
//     'Message from element React',
//     );
// const element2 = <h2 className='root-h2'>Message from element JSX React</h2>;
//
// const array = ['Hello from array once', 'Hello from array twice'];
//
// const Message = (props) => <div>{props.text}</div>;
// const MessageList = (props) => {
//     return props.messages.map((message) => <Message text={message}/>)
// };
//
// ReactDom.render(
//     [
//         element,
//         element2,
//         <Message text = "Just hello" />,
//         <MessageList messages = {array} />,
//     ],
//     document.getElementById('root'),
// );

