import './Header.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';




export class Header extends Component{
  
  render() 
  {
    return (
      <div>
        <Link to="/profile">  
          <Button variant="contained" color="primary">
            Profile
          </Button>      
        </Link>

      </div>
    )
  }
}