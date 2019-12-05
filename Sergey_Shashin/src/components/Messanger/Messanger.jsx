import './Messanger.scss';
import React, { Component } from 'react';
import { MessageField } from 'components/MessageField/MessageField';
import { MessageForm } from 'components/MessageForm/MessageForm';
import { Layout } from 'components/Layout/Layout';
import { ChatList } from 'components/ChatList/Chatlist';
import { Header } from 'components/Header/Header';

export class Messanger extends Component {
  state = {
    chats: {
      '1': {
        id: 1,
        messages: [
          {
            text: 'Привет! Это чат №1',
            author: 'Bot',
          },
        ],
        name: 'Chat 1',
      },
      '2': {
        id: 2,
        messages: [
          {
            text: 'Привет! Это чат №2',
            author: 'Bot',
          },
        ],
        name: 'Chat 2',
      },
      '3': {
        id: 3,
        messages: [
          {
            text: 'Привет! Это чат №3',
            author: 'Bot',
          },
        ],
        name: 'Chat 3',
      },
      '4': {
        id: 4,
        messages: [
          {
            text: 'Привет! Это чат №4',
            author: 'Bot',
          },
        ],
        name: 'Chat 4',
      },
      '5': {
        id: 5,
        messages: [
          {
            text: 'Привет! Это чат №5',
            author: 'Bot',
          },
        ],
        name: 'Chat 5',
      },
    }
  }

  componentDidUpdate() {
    if (this.messages.length) {
      const lastMessage = this.messages[this.messages.length - 1];

      if (lastMessage.author != 'Bot') {
        this.handlMessageSend({ text: `Привет ${lastMessage.author}`, author: 'Bot' });        
      }

    }

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handlMessageSend = (message) => {
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

    if (match && chats[match.params.id]) {
      messages = chats[match.params.id].messages;
    }

    return messages;
  }

  render() {

    return (
      <div className="messanger">
        <Layout />
        <Header />
        <div className="block-chatlist-messagefiled">
          <ChatList />
          {this.messages ? <MessageField items={this.messages} /> : 'Выберите чат, для продолжения общения'}
        </div>
        {this.messages && <MessageForm onSend={this.handlMessageSend} />}
      </div>
    )
  }
}