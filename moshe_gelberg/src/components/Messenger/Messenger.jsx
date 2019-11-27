import './Messenger.css'

import React, { Component } from 'react';

import { MessagesList } from "components/MessagesList";
import { MessageForm } from "components/MessageForm";
import {Layout} from "components/Layout";

export class Messenger extends Component {
  state = {
    messages: []
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
    this.setState(() => ({ messages: [...this.state.messages, message] }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div className="messenger">
        <Layout messages={ messages }/>
        <MessageForm onSend={ this.handleMessageSend }/>
      </div>
    )
  }
}
