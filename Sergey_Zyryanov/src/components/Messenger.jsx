import React, {Component} from 'react';

import {MessageForm} from "./MessageForm";


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
    if (this.state.messages[this.state.messages.length - 1].author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{ author: 'Bot', message: 'Привет! Бот на связи! Я не понимаю вас!',  }]),
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