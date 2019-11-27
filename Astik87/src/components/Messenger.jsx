import React, { Component } from 'react';

import { MessagesList } from './MessagesList';
import { MessageForm } from './MessageForm';

const messages = ['Привет!', 'Как дела?', 'Как настроение?', 'Как погода?'];

export class Messenger extends Component {
  state = {
    messages: []
  };

  handleMessageSend = (message) => {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({messages});
  }

  componentDidUpdate() {
    const lastMessage = this.state.messages[this.state.messages.length - 1]; 
    if (lastMessage.author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{ author: 'Bot', text: `Привет ${lastMessage.author}!`}]),
        });
      }, 1000);
    }
  }

  render() {
    return (
      <div>
        <MessagesList messages={this.state.messages} />
        <MessageForm onSend={this.handleMessageSend} />
      </div> 
    );
  }
}