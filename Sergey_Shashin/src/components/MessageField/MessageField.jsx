import './MessageField.scss';
import React, { Component } from 'react';
import { Message, messageType } from 'components/Message/Message';
import PropTypes from 'prop-types';

export class MessageField extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape(messageType),
    ),
  };

  render() {
    const { items } = this.props;
    return (
      <div className="message-field">        
          {items.map((item, idx) => <Message key={idx} {...item} />)}
      </div>
    )
  }
}