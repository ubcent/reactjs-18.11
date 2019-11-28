import './Messanger.scss';
import React, { Component } from 'react';
import { MessageField } from 'components/MessageField/MessageField';
import { MessageForm } from 'components/MessageForm/MessageForm';
import { Layout } from 'components/Layout/Layout';
import { ChatList } from 'components/ChatList/Chatlist';
import { Header } from 'components/Header/Header';

export class Messanger extends Component {
  state = {
    messages: [],
  }

  componentDidUpdate() {
    const lastMessage = this.state.messages[this.state.messages.length - 1];

    if (lastMessage.author != 'Bot') {
      this.setState({
        messages: this.state.messages.concat([{ text: `Привет ${lastMessage.author}`, author: 'Bot' }])
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handlMessageSend = (message) => {
    this.setState(({ messages }) => ({ messages: messages.concat([message]) }))
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="messanger">
        <Layout />
        <Header />
        <div className="block-chatlist-messagefiled">
          <ChatList />
          <MessageField items={messages} />
        </div>
        <MessageForm onSend={this.handlMessageSend} />
      </div>
    )
  }
}