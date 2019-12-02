import './Layout.css';

import React, {Component} from 'react';

import {Header} from 'components/Header';
import {Messenger} from 'components/Messenger';
import {ChatList} from 'components/ChatList';

export class Layout extends Component{
    render() {

        return (
            <div className="layout">
                <Header />
                <div className="body">
                    <ChatList />
                    <Messenger />
                </div>
            </div>
        )
    }
}