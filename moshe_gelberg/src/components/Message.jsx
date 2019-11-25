import React, { Component } from 'react';

export class Message extends Component {
  state = {
    message: this.props.message
  };

  render() {
    const { author, content } = this.state.message;

    return (
      <p><strong>{ author }:</strong> { content }</p>
    );
  }
}
