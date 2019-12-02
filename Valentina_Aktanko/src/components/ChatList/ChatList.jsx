import './ChatList.scss';

import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export class ChatList extends Component {

    render() {

        return (
            <List className="chat-list">
                <Link to="/chats/1">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="avatar1" src='https://material-ui.com/static/images/avatar/1.jpg' />
                        </ListItemAvatar>
                        <ListItemText primary="Chat 1" />
                    </ListItem>
                </Link>
                <Link to="/chats/2">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="avatar2" src='https://material-ui.com/static/images/avatar/2.jpg' />
                        </ListItemAvatar>
                        <ListItemText primary="Chat 2" />
                    </ListItem>
                </Link>
                <Link to="/chats/3">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="avatar3" src='https://material-ui.com/static/images/avatar/3.jpg' />
                        </ListItemAvatar>
                        <ListItemText primary="Chat 3" />
                    </ListItem>
                </Link>
            </List>
        );
    }
}
