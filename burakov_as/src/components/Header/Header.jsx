import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export class Header extends PureComponent{
  render() {
    const { chats } = this.props;

    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Paper >
              <header>
                {
                  chats && chats.length && <ul>
                    {chats.map((chat, idx) => <li key={idx}>{chat.name}</li>)}
                  </ul>
                }
              </header>
            </Paper>   
          </Grid>
        </Grid>
      </div>
    )
  }
}