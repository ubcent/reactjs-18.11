import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
  state = {
    author: '',
    text: '',
  };

  static propTypes = {
    onSend: PropTypes.func,
  }

  handleMessageSend = () => {
    const { onSend } = this.props;

    if (typeof onSend === 'function') {
      onSend(this.state);

      this.setState({ text: '' });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input placeholder="author" name="author" onChange={this.handleInputChange} type="text" value={this.state.author} /><br />
        <textarea placeholder="text" name="text" onChange={this.handleInputChange} value={this.state.text}></textarea><br/>
        <button onClick={this.handleMessageSend}>Send</button>
      </div>
    );
  }
}