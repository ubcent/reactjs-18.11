import './chatlist.scss';
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AppleIcon from '@material-ui/icons/Apple';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import GroupIcon from '@material-ui/icons/Group';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

export class ChatList extends Component {

  render() {
    return (
      <div className="chatlist">
        <List >
          <Link to="/chats/1">
            <ListItem button>
              <ListItemIcon>
                <AppleIcon />
              </ListItemIcon>
              <ListItemText primary="Apple" />
            </ListItem>
          </Link>
          <Link to="/chats/2">
            <ListItem button>
              <ListItemIcon>
                <DirectionsBikeIcon />
              </ListItemIcon>
              <ListItemText primary="Bike" />
            </ListItem>
          </Link>
          <Link to="/chats/3">
            <ListItem button>
              <ListItemIcon>
                <FitnessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Fitness" />
            </ListItem>
          </Link>
          <Link to="/chats/4">
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItem>
          </Link>
          <Link to="/chats/5">
            <ListItem button>
              <ListItemIcon>
                <PeopleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="People" />
            </ListItem>
          </Link>

        </List>

        <Link to="#">
          <Fab color="primary">
            <AddIcon />
          </Fab>
          <span className="addChat"> Добавить чат</span>
        </Link>

      </div>
    )
  }
}