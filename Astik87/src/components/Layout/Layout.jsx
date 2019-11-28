import './Layout.scss';

import React, { Component } from "react";

import { ChatList } from '../ChatList';
import { Header } from '../Header';

export class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <ChatList />
                    {this.props.content}
                </div>
            </div>
        );
    }
}