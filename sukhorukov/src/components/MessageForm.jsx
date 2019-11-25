import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  render() {
    const { author, text } = this.state;

    return(
      <div>
        <input placeholder="author" onChange={this.handleInputChange} value={author} name="author" type="text"/><br/>
        <textarea placeholder="text" onChange={this.handleInputChange} value={text} name="text" id="" cols="30" rows="10"></textarea><br/>
        <button onClick={this.handleMessageSend}>Send</button>
      </div>
    )
    
  }
}