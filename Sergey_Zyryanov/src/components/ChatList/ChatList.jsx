import React, {Component} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from 'react-router-dom';

import './ChatList.scss';

export class ChatList extends Component {
  render() {
    return (
      <div className='chat-list'>
        <List component="nav" aria-label="main mailbox folders">

          <Link to="/chat/1">
            <ListItem button>
              <ListItemText primary="Chat 1" />
            </ListItem>
          </Link>
          <Link to="/chat/2">
            <ListItem button>
              <ListItemText primary="Chat 2" />
            </ListItem>
          </Link>
          <Link to="/chat/3">
            <ListItem button>
              <ListItemText primary="Chat 3" />
            </ListItem>
          </Link>

        </List>
      </div>
    );
  }
}