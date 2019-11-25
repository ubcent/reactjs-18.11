import React, { Component } from 'react';

import { MessagesList } from './MessagesList';
import { MessageForm } from './MessageForm';

const messages = ['Привет!', 'Как дела?', 'Как настроение?', 'Как погода?'];

export class Messenger extends Component {
  state = {
    messages: [
      {
        author: "Bot",
        text: "Привет всем!"
      }
    ],
  }

  componentDidUpdate() {
    if(this.state.messages[this.state.messages.length -1].author !== "Bot"){
      setTimeout(() => {
        let human = this.state.messages[this.state.messages.length -1].author 
        this.setState({
          messages: this.state.messages.concat([{author: "Bot", text: `Привет ${human}, я бот. Я пока еще тупой!`}])
        })
      }, 1000);
    }
  }

  handleMessageSend = (message) => {
    this.setState({
      messages: this.state.messages.concat([{author: message.author, text: message.text}])
    })
  }

  render() {
    const { messages } = this.state;
    return(
      <div>
        <MessagesList messages={messages}/>
        <MessageForm onSend={this.handleMessageSend} />
      </div>
    )
  }
}