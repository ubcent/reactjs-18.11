import './Header.scss';

import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import blue from '@material-ui/core/colors/blue';

const primary = blue[500]; // #2196f3

export class Header extends Component {
    

    state = {
        // Header: null,
        // MessagesList: null,
        // ChatList: null,
        // MessageForm: null,
    }

    render() {

        return (
            <header className="page-header">
                <Container className="page-header__container" maxWidth="lg">
                    <h1>MATERIAL-UI</h1>
                 </Container>
            </header>
        );
    }
}