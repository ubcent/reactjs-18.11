import React from 'react';
import { mount, shallow } from 'enzyme';

import { MessageForm } from './MessageForm';
// import { MessagesList } from 'components/MessagesList';

test('MessageForm should be rendered', () => {
  const mockOnSend = jest.fn();
  const mockMessagesList = jest.mock;
  const form = mount(<MessageForm messages={[{author: 'serg', test: 'test'}, {author: 'serg2', test: 'test2'}]} onSend={mockOnSend}>
      mockMessagesList
    </MessageForm>
    );

  form.find('button').simulate('click');

  expect(mockOnSend.mock.calls.length).toBe(1);
  expect(mockOnSend.mock.calls[0][0]).toEqual({
    author: '',
    text: '',
  });
});

test('MessageForm should call handleMessageSend', () => {
  const mockHandleMessageSend = jest.fn();
  const form = shallow(<MessageForm onSend={() => {}} />);

  const instance = form.instance();

  instance.handleMessageSend = mockHandleMessageSend;
  instance.handleEnterDown({ ctrlKey: true, keyCode: 13 });
  expect(mockHandleMessageSend.mock.calls.length).toBe(1);

  instance.handleEnterDown({ ctrlKey: false, keyCode: 13 });
  expect(mockHandleMessageSend.mock.calls.length).toBe(1);
});

test('MessageForm.handleInputChange shoud change the state', () => {
  const form = shallow(<MessageForm onSend={() => {}} />);

  const instance = form.instance();
  instance.handleInputChange({
    target: {
      name: 'author',
      value: 'Vasya',
    }
  });

  expect(form.state('author')).toBe('Vasya');
});