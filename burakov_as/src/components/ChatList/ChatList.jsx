import './ChatList.css';

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

moment.locale('ru');

export class ChatList extends Component{
handleChatRemove = (chatId) => () => {
  const { removeChat } = this.props;

  removeChat(chatId);
}

  render() {
    const {chats, addChat } = this.props;

    return (
          <List className="chat-list">
            {chats.map((chat, idx) => 
            <ListItem alignItems="flex-start" button key={idx}>
                <Link className="no-decor" to={chat.link}>
                  <ListItemText 
                    primary={`${chat.name} `}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className="inline"
                          color="textPrimary"
                        >
                          {moment(chat.timestamp).format('LLL')}
                        </Typography>
                      </React.Fragment>
                    }
                    />   
                    <Divider variant="fullWidth" component="li" />
                </Link>
                <IconButton aria-label="delete" onClick={this.handleChatRemove(chat._id)} edge="end">
                  <DeleteIcon />
                </IconButton>
                <Divider variant="fullWidth" component="li" />
            </ListItem>)
            }
            <Button onClick={addChat}>
              <ListItemText primary="+ Добавить чат" />     
            </Button>
          </List>   
    )
  }
}