import React, { Component } from 'react';

import { ListMessages } from 'components/ListMessages';
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
          text: 'Привет! Бот на связи! Я не понимаю вас!',
        };
        this.setState({
          listMessage: [...this.state.listMessage, message]
        });
      }, 2000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMessageSend = (message) => {
    this.setState({
      listMessage: [...this.state.listMessage, message]
    });
  };

  render() {
    const { listMessage } = this.state;

    return (
      <section className="div">
        <ListMessages list={listMessage}/>
        <FormMessage onSend={this.handleMessageSend}/>
      </section>
    );
  }
}