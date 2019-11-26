import React, { Component } from 'react';
// import { MessageField } from 'components/MessageField/MessageField';
import { MessageForm } from 'components/MessageForm/MessageForm';
import PropTypes from 'prop-types';

const messages = ['Привет', 'Как дела?', 'Как настроение?', 'Как погода?'];

export class Messanger extends Component {
  state = {
    messages: [
      { text: 'Cтарт', author: 'Name' }
    ],
  }

  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      const randIndex = Math.floor(Math.random() * messages.length);

      this.setState({
        messages: this.state.messages.concat([{ text: messages[randIndex], author: 'Name' }])
      });
    }, 5000);
  }

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].author != 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{ text: 'Бот на связи', author: 'Bot' }])
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handlMessageSend = (message) => {
    console.log(message);
  }

  render() {
    const { messages } = this.state;

    return (
      <div>
        <ul>
          {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}
        </ul>
        <MessageForm onSend={this.handlMessageSend} />
      </div>
    )
  }
}