import './Message.css'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const messageType = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export class Message extends Component {
  static propTypes = messageType;

  get flexDirection() {
    return this.props.author === 'Bot' ? 'start' : 'end';
  }

  get messageClass() {
    return this.props.author === 'Bot' ? 'bot-message' : 'person-message';
  }

  getTime() {
    let minutes = new Date().getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${new Date().getHours()}:${minutes}`;
  }

  render() {
    const { author, content } = this.props;

    return (
      <div className={ `message ${this.messageClass}` } style={{ alignSelf: `flex-${this.flexDirection}` }}>
        <div>{ content }</div>
        <div className="info">
          <div>{ author }</div>
          <div>{ this.getTime() }</div>
        </div>
      </div>
    );
  }
}
