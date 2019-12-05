import './MessagesList.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types'

import {Message, messageType} from 'components/Message';

export class MessagesList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape(messageType)
    )
  };

  render() {
    const { chat } = this.props;

    return (
      <div className="messages-list">
        { chat ? chat.messages.map((message, idx) => <Message key={idx} {...message}/>) : 'Please, choose a chat.' }
      </div>
    );
  }
}
