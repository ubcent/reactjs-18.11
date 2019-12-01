import './Messenger.scss';

import React, { Component } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';
import { ChatList } from 'components/ChatList'

export class Messenger extends Component {
  state = {
    chats: {
      '1': {messages: []},
      '2': {messages: []},
      '3': {messages: []}
    },
  };

  componentDidUpdate() {
    let { chat } = this.props;

    if (this.state.chats[chat].messages.length) {
      const { author } = this.state.chats[chat].messages[this.state.chats[chat].messages.length - 1];
    
      if (author !== 'Bot') {
        let message = {
          author: 'Bot',
          text: `Привет, ${author}! Бот на связи!`
        }
        setTimeout(() => {
          this.handleMessageSend(message);
        }, 1000);
      }
    }
  }

  handleMessageSend = (message) => {
    let { chat } = this.props;
    let { chats } = this.state;

    if (message.text) {
      chats[chat].messages = chats[chat].messages.concat([message])
      this.setState(({ chats }) => ({ chats: chats }));
    }
  }

  get messages() {
    let { chats } = this.state;
    let { chat } = this.props;

    let messages = [];
    if (chat && chats[chat]) {
      messages = chats[chat].messages;
    }

    return messages;

  }

  render() {
    return (
      <div className="container">
        <ChatList />
        <div className="messanger">
          {this.props.chat ? <MessagesList items={this.messages} /> : 'Выберите чат'}
          {this.props.chat && <MessageForm onSend={this.handleMessageSend} />}
        </div>            
      </div>
    )
  }
}