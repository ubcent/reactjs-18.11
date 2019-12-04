import './ChatList.css';

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component{
  render() {
    const {chats} = this.props;

    return (
      <List>
        {chats.map((chat, idx) => <ListItem button key={idx}>
            <Link to={chat.link}>
              <ListItemText primary={chat.name} />     
            </Link>
        </ListItem>)}
      </List>   
    )
  }
}