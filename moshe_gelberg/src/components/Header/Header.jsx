import './Header.css'

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";

export class Header extends Component {
  render() {
    const { chat } = this.props;

    return (
      <div className="header">
        <div className="chat-info">
          <img src={ chat && chat.avatarPath } alt=""/>
          <h3>{ chat ? chat.name : 'Please, choose a chat.' }</h3>
        </div>
        <Link to="/profile">
          {/*<div className="profile-link">Profile</div>*/}
          <Button className="profile-link-button" variant="outlined">
            <div className="profile-link">Profile</div>
          </Button>
        </Link>
      </div>
    );
  }
}
