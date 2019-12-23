import React from 'react';
import {ChatList} from './ChatList';

import renderer from 'react-test-renderer';

test('Chat list should be rendered', () => {

  const tree = renderer
    .create(<ChatList chats={[{name: 'Chat1'}, {name: 'Chat2'}]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});