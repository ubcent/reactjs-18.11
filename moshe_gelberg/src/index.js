import React from 'react';
import ReactDom from 'react-dom';

const container = document.getElementById('root');

const h1Element = React.createElement(
  'h1',
  { className: 'react-class' },
  'React is working!'
);

ReactDom.render(h1Element, container);

const h2Element = <h2 className="react-class">JSX is working!</h2>;
ReactDom.render(h2Element, container);

const messages = ['Hello!', 'How is it going?'];

const Message = (props) => <div>{ props.text }</div>;
const MessageList = props =>  props.messages.map(message => <Message text={ message } />);

ReactDom.render(
  <MessageList messages={ messages } />,
  container
);
