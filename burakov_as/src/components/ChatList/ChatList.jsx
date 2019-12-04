import './ChatList.css';

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component{
  render() {
    return (
      <List>
        <ListItem button>
            <Link to="/chats/1">
              <ListItemText primary="Chat 1" />     
            </Link>
        </ListItem>
        <ListItem button>
            <Link to="/chats/2">
            <ListItemText primary="Chat 2" />    
           </Link>
        </ListItem>
      </List>   
    )
  }
}