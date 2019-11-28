import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EmailIcon from '@material-ui/icons/Email';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    borderRight: '1px solid rgba(0, 0, 0, .1)',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const ChatList = ({ chatList }) => {
  const classes = useStyles();

  return (
    <section className={classes.root}
             id="chat-list"
    >
      <List component="nav" aria-label="main mailbox folders">
        {
          chatList.map((chatListItem, indx) => {
            return (
              <ListItem button key={indx}>
                <ListItemIcon>
                  {
                    !chatListItem.read
                      ? <EmailIcon/>
                      : <DraftsIcon/>
                  }

                </ListItemIcon>
                <ListItemText primary={chatListItem.name}/>
              </ListItem>
            )
          })
        }
      </List>
    </section>
  );
}
