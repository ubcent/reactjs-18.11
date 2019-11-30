import './Layout.scss';

import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import { Messenger } from 'components/Messenger';
import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';

export class Layout extends Component {y

    render() {

        return (
            <div className="layout" >
                <Header />
                <Container className="layout__container" maxWidth="lg">
                    <div className="layout__left">
                        <ChatList/>
                    </div>
                    <div className="layout__right">
                        <Messenger />
                    </div>
                    
                </Container>
            </div>
        );
    }
}