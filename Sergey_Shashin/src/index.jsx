import 'assets/global.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { Messanger } from 'components/Messanger/Messanger';
import { Layout } from 'components/Layout/Layout';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Layout /> */}
        <Messanger />
      </div>)
  }
}

ReactDom.render(
  <Container />,
  document.getElementById('root'),
);