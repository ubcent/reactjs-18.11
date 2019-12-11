import React, { PureComponent } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'

export class ChatList extends PureComponent {
  render(){
    const { chats, addChat } = this.props;
    return(
      <div>
        <List component="nav">
          {chats.map((chat, idx) =>
            <ListItem button key={idx}>
            <Link to={chat.link}>
              <ListItemText primary={chat.name} />
            </Link>
          </ListItem>
          )}
            <Button onClick={addChat}>
              <ListItemText primary="Добавить чат" />
            </Button>
        </List>
      </div>
    );
  }
}