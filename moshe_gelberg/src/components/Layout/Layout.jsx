import './Layout.css'

import React, {Component} from "react";

import { Header } from "components/Header";
import { ChatList } from "components/ChatList";
import { MessagesList } from "components/MessagesList";

export class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header/>
        <div className="messenger-content">
          <ChatList/>
          <MessagesList messages={ this.props.messages }/>
        </div>
      </div>
    );
  }
}
