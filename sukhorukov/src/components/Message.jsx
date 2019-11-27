import React, { Component } from 'react';

export class Message extends Component {
  render() {
    const { message } = this.props;
    return(
      <li>
        {message.author}: {message.text}
      </li>
    )
  }
}