import './Layout.css';

import React, {Component} from 'react';
import {Header} from "components/Header";
import {ChatList} from "components/ChatList";
import {Messenger} from "components/Messenger";

export class Layout extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Header/>
        </header>
        <div className="container">
          <div className="chatlist-wrap">
            <ChatList/>
          </div>
          <div className="messenger-wrap">
            <Messenger/>
          </div>
        </div>
      </div>

    )

  }
}