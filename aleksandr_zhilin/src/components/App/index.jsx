import './style.scss';

import React, { Component } from 'react';

import { Messenger } from 'components/Messenger';
import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';

export class App extends Component {
  state = {
    chatList: [
      { name: 'Роман', read: false },
      { name: 'Мама', read: true },
      { name: 'React_18.11', read: true },
      { name: 'Брат', read: false },
    ]
  };

  render() {
    const { chatList } = this.state;
    return (
      <div className="container">
        <Header/>
        <ChatList chatList={chatList}/>
        <Messenger/>
      </div>
    );
  }
}
