import React, { Component } from 'react';

import { HeaderRedux } from 'containers/HeaderContainer';
import { MessengerRedux } from 'containers/MessengerContainer';
import { ChatList } from 'components/ChatList';
import Grid from '@material-ui/core/Grid';

export class App extends Component {
  render() {
    const { match } = this.props;
    return(
      <div>
        <HeaderRedux match={match}/>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <ChatList />
          </Grid>
          <Grid item xs={8}>
            <MessengerRedux match={match}/>
          </Grid>
        </Grid>    
      </div>
    );
  }
}

