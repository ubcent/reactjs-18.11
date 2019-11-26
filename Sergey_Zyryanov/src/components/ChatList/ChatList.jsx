import React, {Component} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import './ChatList.scss';

export class ChatList extends Component {
  render() {
    return (
      <div className='chat-list'>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary="Sergey" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Anna" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Egor" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Vlad" />
          </ListItem>
        </List>
      </div>
    );
  }
}