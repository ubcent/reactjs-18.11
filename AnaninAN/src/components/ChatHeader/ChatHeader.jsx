import './ChatHeader.scss';

import React, { Component } from 'react';

export class ChatHeader extends Component {
  render() {
    const { name } = this.props;

    return (
      <div className="chat-header">
        <div className="chat-header__logo">
          MyChat
        </div>
        <div className="chat-header__name">
          {name}
        </div>
      </div>
    );
  }
}