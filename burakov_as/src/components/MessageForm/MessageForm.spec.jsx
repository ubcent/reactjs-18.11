import React from 'react';
import { mount } from 'enzyme';

import { MessageForm } from './MessageForm';

test ('MessageForm should be rendered', () => {
  const mockOnSend = jest.fn();
  const form = mount(<MessageForm onSend={mockOnSend} />);

  form.find('button').simulate('click');

  expect(mockOnSend.mock.calls.length).toBe(1);
  expect(mockOnSend.mock.calls[0][0]).toEqual({
    author: '',
    text: '',
  });
});

test ('MessageForm should  call handleMessageSend', () => {
  const mockHandleMessageSend = jest.fn();
  const form = mount(<MessageForm onSend={() => {}} />);

  const instance = form.instance();
  instance.handleMessageSend = mockHandleMessageSend;
  instance.handleEnterDown({ ctrlKey: true, keyCode: 13 });

  expect(mockHandleMessageSend.mock.calls.length).toBe(1);

  instance.handleEnterDown({ ctrlKey: false, keyCode: 13 });

  expect(mockHandleMessageSend.mock.calls.length).toBe(1);  
});

test('MessageForm.hanleInputChange should change the state', () => {
  const form = mount(<MessageForm onSend={() => {}} />);

  const instance = form.instance();
  instance.handleInputChange({
    target: {
      name: 'author',
      value: 'Vasya',
    }
  });

  expect(form.state('author')).toBe('Vasya');
});