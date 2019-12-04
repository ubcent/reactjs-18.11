import 'assets/global.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'components/Router/Router';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div><Router /></div>
  }
}

ReactDom.render(
  <Container />,
  document.getElementById('root'),
);