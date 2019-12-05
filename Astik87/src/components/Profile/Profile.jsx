import './Profile.scss';

import React,{ Component } from 'react';

import { TextField } from '@material-ui/core';

export class Profile extends Component {
    render() {
        return (
        <div>
            <TextField className="profile-input" id="outlined-basic" label="First Name" variant="outlined" />
            <TextField className="profile-input" id="outlined-basic" label="Last Name" variant="outlined" />
            
        </div>);
    }
}