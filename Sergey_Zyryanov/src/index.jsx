import React from 'react';
import ReactDom from 'react-dom';

const messages = ['Привет, друг!', 'How are you doing? ****'];

const Message = (props) => <div>{props.text}</div>;
const MessageList = (props) => {
  return props.messages.map((message) => <Message text={message}/>)
};
const Button = (props) => {
  return (
    <div>
      <MessageList messages={props.messages}/>
      <button onClick={setText}>Добавить новость</button>
    </div>
  );
};

//как я понял нужно добавлять в state и перезаписываеть его для отображения, для этого нужен class от react component
//в данном случае я сделал только добавление по нажатию, без отображения
function setText() {
  messages.push('Нормально');
}

ReactDom.render(
  <Button messages={messages}/>,
  document.getElementById('root'),
);