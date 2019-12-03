import React, { Component } from 'react';

import { Header } from 'components/Header';
import { Messenger } from 'components/Messenger';
import { ChatList } from 'components/ChatList';
import Grid from '@material-ui/core/Grid';

export class App extends Component {
  render() {
    const { match } = this.props;
    return(
      <div>
        <Header />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <ChatList />
          </Grid>
          <Grid item xs={8}>
            <Messenger match={match}/>
          </Grid>
        </Grid>    
      </div>
    );
  }
}

