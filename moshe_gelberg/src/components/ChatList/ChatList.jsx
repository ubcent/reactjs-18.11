import './ChatList.css'

import React, {Component} from "react";
import {MenuList} from '@material-ui/core';
import {MenuItem} from '@material-ui/core';

export class ChatList extends Component {

  render() {
    return (
      <div className="chat-list">
        <MenuList>
          <div className="menu-item">
            <MenuItem>
              <img
                src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
                alt=""/>
              <div>Jon Snow</div>
            </MenuItem>
          </div>
          <div className="menu-item">
            <MenuItem>
              <img
                src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
                alt=""/>
              <div>Jane Doe</div>
            </MenuItem>
          </div>
          <div className="menu-item">
            <MenuItem>
              <img
                src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
                alt=""/>
              <div>Peter Parker</div>
            </MenuItem>
          </div>
          <div className="menu-item">
            <MenuItem>
              <img
                src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
                alt=""/>
              <div>Tony Stark</div>
            </MenuItem>
          </div>
        </MenuList>
      </div>
    );
  }
}
