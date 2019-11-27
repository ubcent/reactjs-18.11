import 'assets/global.scss';
import './Messenger.css';

import React, {Component} from 'react';

import {MessageForm} from "components/MessageForm";


export class Messenger extends Component {

  state = {
    messages: [],
  };


  componentDidUpdate() {
    const { author } = this.state.messages[this.state.messages.length - 1];
    if (author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{ author: 'Bot', message: `Привет ${author}! Бот на связи!`}]),
        });
      }, 1000);
    }
  }


  handleMessageSend = (message) => {
    this.setState({
      messages: this.state.messages.concat([{ author: message.author, message: message.text }]),
    });
  };

  render() {
    const { messages } = this.state;
    return (
      <div className='messenger'>
        <MessageForm messages={messages} onSend={this.handleMessageSend} />
      </div>
    );

  }
}