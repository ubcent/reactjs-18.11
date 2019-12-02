import './header.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/profile">
          <Fab color="primary" aria-label="send" onClick={this.handleMessageSend}><MenuIcon /></Fab>
          <span className="profile"> Профиль</span>
        </Link>
      </div>
    )
  }
}