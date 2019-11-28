import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
  state = {
    author: '',
    content: ''
  };

  static propTypes = {
    onSend: PropTypes.func
  };

  handleMessageSend = () => {
    const { onSend } = this.props;
    if (typeof onSend === 'function') {
      onSend(this.state);
      this.setState({ content: '' });
    }
  };

  handleInputChange = event => {
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value
    });
  };

  render() {
    const { author, content } = this.state;

    return (
      <div>
        <input name="author" type="text" value={ author } onChange={ this.handleInputChange }/><br/>
        <textarea name="content" rows="3" value={ content } onChange={ this.handleInputChange }/><br/>
        <button onClick={ this.handleMessageSend }>Send</button>
      </div>
    );
  }
}
