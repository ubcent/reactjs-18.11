import './chatlist.scss';
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component {
  render() {
    return (
      <div className="chatlist">
        <List >
          <ListItem  button>
            <ListItemText primary="Чат1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Чат2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Чат3" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Чат4" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Чат5" />
          </ListItem>
        </List>

      </div>
    )
  }
}