import React from 'react';
import { Header } from './Header';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('Header should be rendered', () => {
  const tree = renderer
  .create (<Header chats = {[{name:'Chat 1'}, {name: 'Chat 2'}]}/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Header should be rendered as ul', () => {
  const header = shallow(<Header chats = {[{name:'Chat 1'}, {name: 'Chat 2'}]}/>);
  const lis = header.find('li');

  expect(lis.length).toBe(2);
  expect(lis.first().text()).toBe('Chat 1');
  expect(lis.last().text()).toBe('Chat 2');
  
});