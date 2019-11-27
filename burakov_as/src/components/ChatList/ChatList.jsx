import './ChatList.css';

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export class ChatList extends Component{
  
  render() {
    
    return (
      <List>
        <ListItem button>
          <span class="mdc-list-item__text">Single-line item</span>
        </ListItem>
        <ListItem button>
          <span class="mdc-list-item__text">Single-line item</span>
        </ListItem>
        <ListItem button>
          <span class="mdc-list-item__text">Single-line item</span>
        </ListItem>
        <ListItem button>
          <span class="mdc-list-item__text">Single-line item</span>
        </ListItem>
        <ListItem button>
          <span class="mdc-list-item__text">Single-line item</span>
        </ListItem>
      </List>   
    )
  }
}