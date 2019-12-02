import './style.scss';

import React, { Component } from 'react';

import { ListMessages } from 'components/ListMessage';
import { FormMessage } from 'components/FormMessage';

export class Messenger extends Component {
  state = {
    listMessage: []
  };

  interval = null;

  componentDidUpdate() {
    const { author } = this.state.listMessage[this.state.listMessage.length - 1];
    if (author !== 'Bot') {
      setTimeout(() => {
        const message = {
          author: 'Bot',
          text: `Привет, ${author}! Бот на связи! Я не понимаю вас!`,
        };
        this.setState(
          ({ listMessage }) => ({ listMessage: [...listMessage, message] })
        );
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMessageSend = (message) => {
    this.setState(
      ({ listMessage }) => ({ listMessage: [...listMessage, message] })
    );
  };

  render() {
    return (
      <section id="messenger">
        <ListMessages {...this.state}/>
        <FormMessage onSend={this.handleMessageSend}/>
      </section>
    );
  }
}