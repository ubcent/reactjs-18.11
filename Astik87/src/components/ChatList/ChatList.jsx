import './ChatList.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component {

  chats = [
    'Astik',
    'Eric Hoffman',
    'Boris Moskalev'
  ];

  render() {
    return (
      <div className="chat-list">
          <List component="nav" aria-label="contacts">
              {this.chats.map((item, idx) =><Link to={`/chats/${idx+1}`} key={idx}><ListItem button><ListItemText inset primary={item} /></ListItem></Link>
              )}
          </List>
      </div>
    );
  }
}