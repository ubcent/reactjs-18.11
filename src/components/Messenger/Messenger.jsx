import './Messenger.css';

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends Component {
  state = {
    chats: {
      '1': {
        id: 1,
        messages: [
          { text: 'Привет! Это чат №1', author: 'Bot' },
        ],
        name: 'Chat 1',
      },
      '2': {
        id: 2,
        messages: [
          { text: 'Привет! Это чат №2', author: 'Bot' },
        ],
        name: 'Chat 2',
      },
      '3': {
        id: 3,
        messages: [
          { text: 'Привет! Это чат №3', author: 'Bot' },
        ],
        name: 'Chat 3',
      }
    },
  };

  componentDidUpdate() {
    if (this.messages.length) {
      const { author } = this.messages[this.messages.length - 1];
      if (author !== 'Bot') {
        setTimeout(() => {
          this.handleMessageSend({ text: `Привет, ${author}! Бот на связи!`, author: 'Bot' });
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

  get messages() {
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
      <div className="messanger">
        <List>
          <ListItem>
            <Link to="/chats/1">
              <ListItemText primary="Chat 1"></ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/chats/2">
              <ListItemText primary="Chat 2"></ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/chats/3">
              <ListItemText primary="Chat 3"></ListItemText>
            </Link>
          </ListItem>
        </List>
        {this.messages ? <MessagesList items={this.messages} /> : 'Пожалуйста, выберите чат, чтобы продолжить общение'}
        {this.messages && <MessageForm onSend={this.handleMessageSend} />}
      </div>
    )
  }
}