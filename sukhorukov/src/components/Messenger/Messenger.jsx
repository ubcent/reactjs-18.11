import './Messenger.css';

import React, { Component } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends Component {
  state = {
    chats: {
      '1': {
        id: 1,
        messages: [
          { text: 'Привет, это чат №1', author: 'Bot', },
        ],
        name: 'Chat 1',
      },
      '2': {
        id: 2,
        messages: [
          { text: 'Привет, это чат №2', author: 'Bot', },
        ],
        name: 'Chat 2',
      },
      '3': {
        id: 3,
        messages: [
          { text: 'Привет, это чат №3', author: 'Bot', },
        ],
        name: 'Chat 3',
      },
    },
  }

  componentDidUpdate() {
    const { author } = this.messages[this.messages.length - 1];
    if(author !== "Bot"){
      setTimeout(() => { 
        this.handleMessageSend({ author: "Bot", text: `Привет ${author}, я бот. Я пока еще тупой!`})
      }, 1000);
    }
  }

  handleMessageSend = (message) => {
    const { chats } = this.state;
    const { match } = this.props;

    const chat = chats[match.params.id];
    const messages = this.messages.concat([message]);
    chat.messages = messages;

    this.setState({
      chats: {
        ...this.state.chats,
        [match.params.id]: chat,
      }
    });
  }

  get messages() {
    const { chats } = this.state;
    const { match } = this.props;

    let messages = null;

    if(match && chats[match.params.id]) {
      messages = chats[match.params.id].messages;
    }

    return messages;
  }

  render() {
    return(
      <div className="messenger">
        {this.messages ? <MessagesList messages={this.messages}/> : 'Пожалуйста выберите чат'}
        {this.messages && <MessageForm onSend={this.handleMessageSend} />}
      </div>
    )
  }
}