import React, { Component } from 'react';

import { MessagesList } from "components/MessagesList";
import { MessageForm } from "components/MessageForm";

export class Messenger extends Component {
  state = {
    messages: [
      {author: 'John', content: 'Hello!'},
      {author: 'Veronica', content: 'Whats up!'},
      {author: 'John', content: 'How is it going?'},
      {author: 'Veronica', content: 'Awesome!'}
    ]
  };

  componentDidUpdate() {
    this.botResponse();
  }

  botResponse() {
    const lastMessage = this.state.messages[this.state.messages.length - 1];
    const botMessage = {
      author: 'Bot',
      content: `Hello, ${lastMessage.author}! I am a bot. Nice to meet you!`
    };

    if (lastMessage.author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([botMessage])
        });
      }, 1000);
    }
  }

  handleMessageSend = message => {
    this.setState(state => {
      return { messages: state.messages.concat([message]) };
    });
  };

  render() {
    const { messages } = this.state;

    return (
      <div>
        <MessagesList messages={ messages }/>
        <MessageForm onSend={ this.handleMessageSend }/>
      </div>
    )
  }
}
