import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'

export class MessageForm extends Component {
  state = {
    author: "",
    text: "",
  }

  static propTypes = {
    onSend: PropTypes.func,
  }

  handleMessageSend = () => {
    const { onSend } = this.props;

    if(typeof onSend === 'function'){
      onSend(this.state);

      this.setState({ text: '' , author: '',})
    }
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    });
  }

  handleEnterDown = (event) => {
    console.log(event);
    if(event.ctrlKey && event.keyCode === 13) {
      this.handleMessageSend(); 
    }
  }

  render() {
    const { author, text } = this.state;

    return(
      <div>
        <input placeholder="author" onChange={this.handleInputChange} value={author} name="author" type="text"/><br/>
        <textarea placeholder="text" onKeyDown={this.handleEnterDown} onChange={this.handleInputChange} value={text} name="text" id="" cols="30" rows="10"></textarea><br/>
        <Button variant="contained" color="primary" onClick={this.handleMessageSend}>Send</Button>
      </div>
    )
    
  }
}