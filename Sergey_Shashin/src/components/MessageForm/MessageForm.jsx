import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    });
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleMessageSend();
    }
  }

  render() {
    const { author, text } = this.state;

    return (
      <div>
        <TextField id="standard-basic" label="Имя" name="author" type="text" value={author} onChange={this.handleInputChange} />
        <br />
        <TextField multiline id="standard-basic" label="Сообщение" name="text" value={text} onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={this.handleMessageSend}>Отправить</Button>
      </div>
    )
  }
}