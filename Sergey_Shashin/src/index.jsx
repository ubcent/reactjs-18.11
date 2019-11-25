import React from 'react';
import ReactDom from 'react-dom';
import { Messanger } from 'components/Messanger';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><Messanger /></div>)
  }
}

ReactDom.render(
  <Container />,
  document.getElementById('root'),
);