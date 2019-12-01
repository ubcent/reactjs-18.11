import './MessageForm.css'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

export class MessageForm extends Component {
  state = {
    author: '',
    content: ''
  };

  static propTypes = {
    onSend: PropTypes.func
  };

  handleMessageSend = () => {
    const {onSend} = this.props;
    if (typeof onSend === 'function' &&
      this.state.content !== '' &&
      this.state.author !== '') {
      onSend(this.state);
      this.setState({content: ''});
    }
  };

  handleInputChange = event => {
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value
    });
  };

  handleEnterDown = event => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleMessageSend();
    }
  };

  render() {
    const {author, content} = this.state;

    return (
      <div className="message-form">
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Author"
          variant="outlined"
          name="author"
          type="text"
          value={author}
          onChange={this.handleInputChange}
        />
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Content"
          variant="outlined"
          name="content"
          value={content}
          onKeyDown={this.handleEnterDown}
          onChange={this.handleInputChange}
        />
        <Fab className="send" variant="round" color="primary" onClick={this.handleMessageSend}><SendIcon/></Fab>
      </div>
    );
  }
}
