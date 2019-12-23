import React from 'react';
import {Message} from './Message';

import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('Message should be rendered', () => {

  const tree = renderer
    .create(<Message author={'Serg'} text={'hello'}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Message should be rendered as div', () => {
  const message = shallow(<Message author={'Serg'} text={'hello'}/>);
  const div = message.find('div');

  expect(div.length).toBe(3);
  expect(div.first().text()).toBe('Serg');
  expect(div.last().text()).toBe('hello');
});