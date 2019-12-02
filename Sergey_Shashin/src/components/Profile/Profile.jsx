import './avatar.scss';
import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

export class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <Link to="/">
          <HomeIcon />
        </Link>
        <h2>Профиль</h2>
        <div className="avatar">
          <img src="src\components\Profile\avatar.jpg" alt="" />
        </div>
      </div>)
  }
}