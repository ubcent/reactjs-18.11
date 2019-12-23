import './ChatList.scss';

import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import Remove from '@material-ui/icons/Remove';
import moment from 'moment';

moment.locale('ru');

export class ChatList extends Component {

  handleChatRemove = (chatId) => () => {
    const {removeChat} = this.props;

    removeChat(chatId);
  };

  render() {
    const {chats, addChat} = this.props;

    return (
      <div className='chat-list'>
        <List component="nav" aria-label="main mailbox folders">

          {chats.map((chat, idx)=>
            <Link key={idx} to={chat.link}>
              <ListItem button>
                <ListItemText primary={`[${moment(chat.timestamp).format('LLL')}] ${chat.name}`} />
                <Fab variant="round" color="primary" onClick={this.handleChatRemove(chat._id)}><Remove /></Fab>
              </ListItem>
            </Link>
          )}

          <ListItem onClick={addChat} button>
            <ListItemText primary="+ Добавить чат" />
          </ListItem>

        </List>
      </div>
    );
  }
}