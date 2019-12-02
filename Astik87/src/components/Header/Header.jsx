import './Header.scss';

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export class Header extends Component {

    render() {
        return (
            <div className="header">
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" >
                    <Link className='menu-item' to='/' >Chats</Link>
                    <Link className='menu-item' to='/profile/' >Profile</Link>
                  </Typography>
                </Toolbar>
              </AppBar>
            </div>
          );
    }

}

