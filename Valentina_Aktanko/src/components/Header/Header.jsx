import './Header.scss';

import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import { MainMenu } from 'components/MainMenu';

export class Header extends Component {

    render() {

        return (
            <header className="page-header">
                <Container className="page-header__container" maxWidth="lg">
                    <MainMenu />
                </Container>
            </header>
        );
    }
}