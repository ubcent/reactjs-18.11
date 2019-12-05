import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './style';

export const Header = () => {
  /**
   * @type object classes
   */
  const classes = useStyles();

  return (
    <div className={classes.root}
         id="header"
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6"
                      className={classes.title}
          >
            MyChat
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
