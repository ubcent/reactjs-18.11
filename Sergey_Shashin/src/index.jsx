import React from 'react';
import ReactDom from 'react-dom';
import { App } from 'components/App';
import { MessageField } from 'components/MessageField';
import { Message } from 'components/Message';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>        
        <div>
        <MessageField />
        </div>
      </div>)
  }
}

ReactDom.render(
  <Container />,
  document.getElementById('root'),
);