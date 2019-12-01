import './Messenger.css';

import React, { Component } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';


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
    const lastMessage = this.state.messages[this.state.messages.length -1];
    if(lastMessage.author !== "Bot"){
      setTimeout(() => { 
        this.setState({
          messages: this.state.messages.concat([{author: "Bot", text: `Привет ${lastMessage.author}, я бот. Я пока еще тупой!`}])
        })
      }, 1000);
    }
  }

  handleMessageSend = (message) => {
    this.setState(({messages}) => ({ messages: messages.concat([message]) }));
  }

  render() {
    const { messages } = this.state;
    return(
      <div className="messenger">
        <MessagesList messages={messages}/>
        <MessageForm onSend={this.handleMessageSend} />
      </div>
    )
  }
}