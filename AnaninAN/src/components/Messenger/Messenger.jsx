import './Messenger.scss';

import React, { PureComponent } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends PureComponent {
  // componentDidUpdate() {
  //   if (this.messages.length) {
  //     const { author } = this.messages[this.messages.length - 1];

  //     if (author !== 'Bot') {
  //       setTimeout(() => {
  //         this.handleMessageSend({text: `Привет, ${author}! Бот на связи!`, author: 'Bot'});
  //       }, 1000);
  //     }
  //   }
  // }

  render() {
    const { messages, sendMessage } = this.props;

    return (
      <div className="messenger">
        { messages ? <MessagesList items={messages} /> : 'Выберите чат!' }
        { messages && <MessageForm onSend={sendMessage} /> }
      </div>
    );
  }
}