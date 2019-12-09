import React    from 'react';
import { Link } from 'react-router-dom';

import { makeStyles }                                 from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import EmailIcon                                      from '@material-ui/icons/Email';
import DraftsIcon                                     from '@material-ui/icons/Drafts';

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
          Object.keys(chatList).map((chatIndx, indx) => {
            return (
              <Link key={indx} to={`/chat/${chatIndx}/`}>
                <ListItem button>
                  <ListItemIcon>
                    {
                      !chatList[chatIndx].read
                        ? <EmailIcon/>
                        : <DraftsIcon/>
                    }
                  </ListItemIcon>
                  <ListItemText primary={chatList[chatIndx].name}/>
                </ListItem>
              </Link>
            )
          })
        }
      </List>
    </section>
  );
};
