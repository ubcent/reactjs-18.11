import './Header.scss';

import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

export class Header extends Component {

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