import './Header.scss';

import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';

import { MainMenu } from 'components/MainMenu';

export class Header extends PureComponent {
    

    render() {
        const { chats } = this.props;
        return (
            <header className="page-header">
                <Container className="page-header__container" maxWidth="lg">
                    <MainMenu />
                    {
                        chats && chats.length && <ul>
                            {chats.map((chat) => <li>{chat.name}</li>)}
                        </ul>
                    }
                </Container>
            </header>
        );
    }
}