import './Messenger.css';

import React, { Component } from 'react';

import {MessagesList} from 'components/MessagesList';
import {MessageForm} from 'components/MessageForm';

import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';

export class Messenger extends Component{

  state = {
    chats: 
    {
      '1': {
        id: 1, 
        messages: [
          {text: 'Привет! Это чат номер 1', author: 'Bot'}
        ], 
        name: 'Chat 1'
      },
      '2': {
        id: 2, 
        messages: [
          {text: 'Привет! Это чат номер 2', author: 'Bot'}
        ],  
        name: 'Chat 2'
      },
      '3': {
        id: 3, 
        messages: [
          {text: 'Привет! Это чат номер 3', author: 'Bot'}
        ], 
        name: 'Chat 3'
      },
    }
  }

  componentDidUpdate(){
     if(this.messages.length) {
      const {author} = this.messages[this.messages.length - 1];
        if(author !== 'Bot'){
          setTimeout(() => {
            this.handleMessageSend({text: `Привет, ${author}! Бот на связи!`, author: 'Bot'});
          }, 1000);
        }
    } 
  }

  handleMessageSend = (message) => {
    const { chats } = this.state;
    const { match } = this.props;

    const chat = chats[match.params.id];
    const messages = this.messages.concat([message]); 
    chat.messages = messages;

    this.setState({
      chats: {
        ...this.state.chats,
        [match.params.id]: chat,
      }
    });
  }


  get messages () {
    const { chats } = this.state;
    const { match } = this.props;

    let messages = null; 

    if (match && chats[match.params.id]) {     
        messages = chats[match.params.id].messages;
    }
    return messages;
  }

  render() {
    return (
      <div className="messenger">
        <Header />
        <div className="layout">
          <ChatList />
          <div>
            {this.messages ? <MessagesList items={this.messages} /> : 'Выберите чат, чтобы продолжить общение'}
            {this.messages && <MessageForm onSend={this.handleMessageSend} /> }
          </div>
        </div>
      </div>
    )
  }
}