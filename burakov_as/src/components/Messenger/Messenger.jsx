import './Messenger.css';

import React, { Component, PureComponent } from 'react';

import {MessagesList} from 'components/MessagesList';
import {MessageForm} from 'components/MessageForm';

import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';

export class Messenger extends PureComponent{
  render() {
    const { chats, messages, sendMessage } = this.props;
    
    return (
      <div className="messenger">
        <Header />
        <div className="layout">
          <ChatList chats={chats}/>
          <div>
            {messages ? <MessagesList items={messages} /> : 'Выберите чат, чтобы продолжить общение'}
            {messages && <MessageForm onSend={sendMessage} /> }
          </div>
        </div>
      </div>
    )
  }
}