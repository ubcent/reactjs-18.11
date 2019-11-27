import 'assets/global.css'

import React from 'react';
import ReactDom from 'react-dom';

import { Messenger } from 'components/Messenger/Messenger';

const container = document.getElementById('root');

ReactDom.render(
  <Messenger/>,
  container
);
