import './ChatList.scss';

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export class ChatList extends Component {

    render() {

        return (
          <List>
              <ListItem>Chat 1</ListItem>
              <ListItem>Chat 2</ListItem>
              <ListItem>Chat 3</ListItem>
          </List>
        );
    }
}
