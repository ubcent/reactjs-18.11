import React, { Component } from 'react';

export class MessagesList extends Component {
  render() {
    return (
      <ul>
        {this.props.messages.map((message) => {
        return <li>{message.author}: {message.text}</li>
        })}
      </ul>
    );
  }
}