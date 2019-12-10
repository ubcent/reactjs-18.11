import './ChatPage.scss';

import React, { Component } from 'react';

import { ChatHeaderRedux } from 'containers/ChatHeaderContainer';
import { ChatListRedux } from 'containers/ChatListContainer';
import { MessengerRedux } from 'containers/MessengerContainer';

export class ChatPage extends Component {
  render() {
    const { match } = this.props;

    return (
      <div className="chat-page">
        <ChatHeaderRedux match={match} />
        <div className="chat-page__chat">
          <ChatListRedux />
          <MessengerRedux match={match} />
        </div>
      </div>
    );
  }
}