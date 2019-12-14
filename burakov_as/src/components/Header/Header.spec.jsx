import React from 'react';
import { Header } from './Header';

import renderer from 'react-test-renderer';

test('Header should be rendered', () => {
  const tree = renderer
  .create (<Header chats = {[{name: 'Chat 1'}, {name:'Chat 2'}]}/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});