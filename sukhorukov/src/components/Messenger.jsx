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

  inerval = null;

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   const randIndex = Math.floor(Math.random() * messages.length);

    //   this.setState({
    //     messages: this.state.messages.concat([{author: "Sergey", text: messages[randIndex]}])
    //   })
    // }, 5000)
  }

  componentDidUpdate() {
    if(this.state.messages[this.state.messages.length -1].author !== "Bot"){
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{author: "Bot", text: "Привет, я бот. Я пока еще тупой!"}])
        })
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.inerval);
  }

  handleMessageSend = (message) => {
    this.setState({
      messages: this.state.messages.concat([{author: message.author, text: message.text}])
    })
    console.log(message);
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