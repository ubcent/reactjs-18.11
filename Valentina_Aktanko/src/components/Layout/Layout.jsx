import './Layout.scss';

import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import { Messenger } from 'components/Messenger';
import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';

export class Layout extends Component {
    state = {
        // Header: null,
        // MessagesList: null,
        // ChatList: null,
        // MessageForm: null,
    }


    render() {

        return (
            <div className="layout" >
                <Header />
                <Container className="layout__container" maxWidth="lg">
                    <div className="layout__left">
                        <Messenger />
                    </div>
                    <div className="layout__right">
                        <ChatList/>
                    </div>
                    
                </Container>
            </div>
        );
    }
}