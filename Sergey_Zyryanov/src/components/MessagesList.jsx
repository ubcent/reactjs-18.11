import React, {Component} from 'react';
import {Message} from "./Message";
import PropTypes from 'prop-types';

export class MessagesList extends Component {

  static propTypes = {
    messages: PropTypes.array.isRequired,
  };


  render() {
    const message = this.props.messages.map((message, idx) => <Message key={idx} author={message.author} message={ message.message }/>);

    return (
       <ul>
         {message}
       </ul>
    );
  }
}