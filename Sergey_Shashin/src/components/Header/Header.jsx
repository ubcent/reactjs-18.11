import './header.scss';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export class Header extends Component {
  render() {
    return (
      <div className = "header">
      <Button color="primary" >
        Menu
      </Button>
      <Menu color="primary">
      <MenuItem></MenuItem>
      </Menu>
      </div>
    )
  }
}