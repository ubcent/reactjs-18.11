import './Messenger.css'

import React, {Component} from 'react';

import {MessageForm} from "components/MessageForm";
import {Layout} from "components/Layout";

export class Messenger extends Component {
  state = {
    chats: {
      1: {
        id: 1,
        name: 'Jon Snow',
        avatarPath: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/80/807938f0ddaacf972dfd4b4fd31a19a3a0f90317_full.jpg',
        messages: [
          {content: 'Hello from chat #1', author: 'Bot'}
        ]
      },
      2: {
        id: 2,
        name: 'Jack Sparrow',
        avatarPath: 'https://avatarfiles.alphacoders.com/158/158636.jpg',
        messages: [
          {content: 'Hello from chat #2', author: 'Bot'}
        ]
      },
      3: {
        id: 3,
        name: 'Peter Parker',
        avatarPath: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/spiderman-5-520228.png',
        messages: [
          {content: 'Hello from chat #3', author: 'Bot'}
        ]
      },
      4: {
        id: 4,
        name: 'Tony Stark',
        avatarPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnBPmWLcRYrV9NNblezyuGeXJcm6KGUMUt3mxPKwVxqSEVe3_&s',
        messages: [
          {content: 'Hello from chat #4', author: 'Bot'}
        ]
      }
    }
  };

  componentDidUpdate() {
    if (this.chat.messages.length) {
      this.botResponse();
    }
  }

  botResponse() {
    const lastMessage = this.chat.messages[this.chat.messages.length - 1];
    const botMessage = {
      author: 'Bot',
      content: `Hello, ${lastMessage.author}! I am a bot. Nice to meet you!`
    };

    if (lastMessage.author !== 'Bot') {
      setTimeout(() => {
        this.handleMessageSend(botMessage);
      }, 1000);
    }
  }

  handleMessageSend = message => {
    const chatId = this.props.match.params.id;
    const chat = this.state.chats[chatId];

    chat.messages = [...this.chat.messages, message];

    this.setState({
      chats: {
        ...this.state.chats,
        [chatId]: chat
      }
    });
  };

  /**
   *
   * @returns {null | {}[]}
   */
  get chat() {
    const { chats } = this.state;
    const { match } = this.props;

    let chat = null;

    if (match && chats[match.params.id]) {
      chat = chats[match.params.id];
    }

    return chat;
  }

  render() {
    return (
      <div className="messenger">
        <Layout chat={this.chat} chats={ this.state.chats }/>
        { this.chat && <MessageForm onSend={this.handleMessageSend}/> }
      </div>
    )
  }
}
