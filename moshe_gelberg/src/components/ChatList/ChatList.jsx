import './ChatList.css'

import React, {Component} from "react";
import { MenuList } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

export class ChatList extends Component {

  render() {
    const { chats } = this.props;

    return (
      <div className="chat-list">
        <MenuList>
          { chats && Object.values(chats).map((chat, idx) => (
            <div className="menu-item" key={idx}>
              <Link to={ `/chats/${chat.id}` } >
                <MenuItem>
                  <img
                    src={ chat.avatarPath }
                    alt=""/>
                  <div className="chat-name">{ chat.name }</div>
                </MenuItem>
              </Link>
            </div>
          ))}
        </MenuList>
      </div>
    );
  }
}
