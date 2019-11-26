import React, {Component} from 'react';

import {MessageForm} from "components/MessageForm";


export class Messenger extends Component {

  state = {
    messages: [
      {author: 'sergey', message: 'text'},
      {author: 'anna', message: 'text2'},
      {author: 'vlad', message: 'text3'},
      {author: 'jhon', message: 'text4'},
    ],

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
      <div>
        <MessageForm messages={messages} onSend={this.handleMessageSend} />
      </div>
    );

  }
}