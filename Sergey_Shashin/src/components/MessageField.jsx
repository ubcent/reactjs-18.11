import React, { Component } from 'react';
import { Message } from './Message';


export class MessageField extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);

  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.text} />
        <button onClick={this.handleSendMessage}>Send</button>
        <Message item={this.state.items} />
      </div>
    )
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSendMessage() {
    this.setState({ items: this.state.text })

  }


}