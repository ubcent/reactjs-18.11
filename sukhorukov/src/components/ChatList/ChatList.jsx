import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { ListItemLink } from 'components/ListItemLink'

export class ChatList extends Component {
  render(){
    return(
      <div>
        <List component="nav">
          <ListItemLink href="#chat-one">
            <ListItemText primary="Chat 1" />
          </ListItemLink>
          <ListItemLink href="#chat-two">
            <ListItemText primary="Chat 2" />
          </ListItemLink>
          <ListItemLink href="#chat-three">
            <ListItemText primary="Chat 3" />
          </ListItemLink>
        </List>
      </div>
    );
  }
}