import React, { Component } from "react";
import { Message } from "components/Message";

export class MessageField extends Component {
  state = {
    messages: ["Привет", "Как дела?"]
  };

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, "Нормально"]});
  }

  render() {
    const messagesElements = this.state.messages.map(
      (text, index) => <Message key={index} text={text} />
    )
    return (
      <div>
        {messagesElements}
        <button onClick={this.handleClick}>Отправить сообщение</button>
      </div>
    )
  }
}