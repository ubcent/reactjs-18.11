import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export class FormMessage extends Component {
  state = {
    author: 'Автор сообщения',
    text: 'Текст сообщения'
  };

  static propTypes = {
    onSend: PropTypes.func,
  };

  selectText = (event) => {
    event.target.select()
  };

  handleMessageSend = (event) => {
    event.preventDefault();

    const { onSend } = this.props;
    if (typeof onSend === 'function') {
      onSend(this.state);

      this.setState({ text: '' });
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { author, text } = this.state;

    return (
      <form className="form-message"
            onSubmit={this.handleMessageSend}
      >
        <input name="author"
               type="text"
               value={author}
               onFocus={this.selectText}
               onChange={this.handleInputChange}
        />
        <textarea name="text"
                  value={text}
                  onFocus={this.selectText}
                  onChange={this.handleInputChange}
        />
        <input type="submit" value={'Отправить'}/>
      </form>
    );
  }
}