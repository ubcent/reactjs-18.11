import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Message } from './Message';

export class MessagesList extends Component {
  render() {
    const { messages } = this.props;

    return(
      <ul>
        {messages.map((message, idx) => <Message key={idx} message={message}/>)}
      </ul>
    )
  }
}