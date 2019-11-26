import React, { Component } from 'react';
import { MessageField } from 'components/MessageField/MessageField';
import { MessageForm } from 'components/MessageForm/MessageForm';

export class Messanger extends Component {
  state = {
    messages: [],
  }

  componentDidUpdate() {
    const lastMessage = this.state.messages[this.state.messages.length - 1];

    if (lastMessage.author != 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{ text: `Привет ${lastMessage.author} Бот на связи`, author: 'Bot' }])
        });
      }, 1000);
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
      <div>
        <MessageField items={messages} />
        <MessageForm onSend={this.handlMessageSend} />
      </div>
    )
  }
}