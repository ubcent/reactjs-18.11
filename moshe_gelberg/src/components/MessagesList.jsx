import React, { Component } from 'react';

import { Message } from './Message';

export class MessagesList extends Component {
  render() {
    return (
      <div>
        <ul>
          { this.props.messages.map((message, idx) => <li key={ idx }><Message message={ message }/></li>) }
        </ul>
      </div>
    );
  }
}
