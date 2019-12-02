import './Header.css';

import React, {Component} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {Container} from "@material-ui/core";

export class Header extends Component {
    render() {
        return (
            <Paper component="form" className="headerContainer">
                <IconButton className="iconButton" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <InputBase
                    className="input"
                    placeholder="Search"
                    inputProps={{'aria-label': 'search'}}
                />
                <IconButton type="submit" className="iconButton" aria-label="search">
                    <SearchIcon/>
                </IconButton>
                <Divider className="divider" orientation="vertical"/>

            </Paper>
        );
    }
}