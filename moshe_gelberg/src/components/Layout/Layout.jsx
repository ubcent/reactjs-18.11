import './Layout.css'

import React, {Component} from "react";

import { Header } from "components/Header";
import { ChatList } from "components/ChatList";
import { MessagesList } from "components/MessagesList";

export class Layout extends Component {

  render() {
    const { chat } = this.props;
    const { chats } = this.props;

    return (
      <div className="layout">
        <Header chat={ chat }/>
        <div className="messenger-content">
          <ChatList chats={ chats }/>
          <MessagesList chat={ chat }/>
        </div>
      </div>
    );
  }
}
