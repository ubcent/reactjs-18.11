import './Messenger.css';

import React, { Component, PureComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends PureComponent {
  render() {
    const { chats, messages, sendMessage } = this.props;

    return (
      <div className="messanger">
        <List>
          {chats.map((chat, idx) => <ListItem key={idx}>
            <Link to={chat.link}>
              <ListItemText primary={chat.name}></ListItemText>
            </Link>
          </ListItem>)}
        </List>
        {messages ? <MessagesList items={messages} /> : 'Пожалуйста, выберите чат, чтобы продолжить общение'}
        {messages && <MessageForm onSend={sendMessage} />}
      </div>
    )
  }
}