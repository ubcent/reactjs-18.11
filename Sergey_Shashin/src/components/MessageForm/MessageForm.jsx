import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
  state = {
    author: '',
    text: ''
  }

  static propTypes = {
    onSend: PropTypes.func,
  }

  handleMessageSend = () => {
    const { onSend } = this.props;

    if (typeof onSend === 'function') {
      onSend(this.state);

      this.setState({
        text: ''
      });
    }


  }

  handleInputChange = (event) => {
    const FieldName = event.target.name;

    this.setState({
      [FieldName]: event.target.value,
    });

  }

  render() {
    const { author, text } = this.state;

    return (
      <div>
        <input name="author" type="text" value={author} onChange={this.handleInputChange} placeholder="Имя отправителя" />
        <br />
        <textarea name="text" value={text} onChange={this.handleInputChange} placeholder="Текст сообщения" />
        <br />
        <input type="submit" value="Отправить сообщение" onClick={this.handleMessageSend} />
      </div>
    )
  }
}