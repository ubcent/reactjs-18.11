import './style.scss';

import React, { Component } from 'react';

import { Header }       from 'components/Header';
import { ChatList }     from 'components/ChatList';
import { ListMessages } from "../ListMessage";
import { FormMessage }  from "../FormMessage";

export class App extends Component {

  state = {
    chats: {
      '1': {
        id: 1,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Bot'
          }
        ],
        name: 'Роман',
        read: false,
      },
      '2': {
        id: 1,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Bot'
          }
        ],
        name: 'Мама',
        read: false,
      },
      '3': {
        id: 1,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Bot'
          }
        ],
        name: 'React_18.11',
        read: true,
      },
      '4': {
        id: 1,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Bot'
          }
        ],
        name: 'Брат',
        read: true,
      },
    }
  };

  interval = null;

  componentDidUpdate() {

    if (this.messageList.length) {

      const { author } = this.messageList[this.messageList.length - 1];
      if (author !== 'Bot') {
        setTimeout(() => {
          this.handleMessageSend({
            author: 'Bot',
            text: `Привет, ${author}! Бот на связи! Я не понимаю вас!`,
          });
        }, 1000);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMessageSend = (message) => {
    const { chats } = this.state;
    const { id } = this.props.match.params;

    const chat = chats[id];

    chat.messages = this.messageList.concat([message]);

    this.setState({
        chats: {
          ...this.state.chats, [id]: chat
        }
      }
    );
  };

  /**
   * @returns []
   */
  get messageList() {
    const { chats } = this.state;
    const { match } = this.props;

    let messageList = null;

    if (match && chats[match.params.id]) {
      messageList = chats[match.params.id].messages;
    }
    return messageList
  }

  render() {
    const { chats } = this.state;

    return (
      <div className="container">
        <Header/>
        <ChatList chatList={chats}/>
        <section id="messenger">
          {
            this.messageList
              ? (
                <React.Fragment>
                  <ListMessages listMessage={this.messageList}/>
                  <FormMessage onSend={this.handleMessageSend}/>
                </React.Fragment>
              )
              : <ListMessages listMessage={[{ author: '', text: 'Вам необходимо выбрать чат, чтобы продолжить.' }]}/>
          }
        </section>
      </div>
    );
  }
}
