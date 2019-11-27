import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
    state = {
        author: '',
        text: '',
    }

    static propTypes = {
        onSend: PropTypes.func,
    }

    handleMessageSend = () => {
        const { onSend } = this.props;

        if (typeof onSend === 'function') {
            onSend(this.state);

            this.setState( { text: '' });
        }
    }

    handleInputChange = (event) => {
        const fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value,
        });
    }

    handleEnterDown = (event) => {
        if(event.ctrlKey && event.keyCode === 13) {
            this.handleMessageSend();
        }
    }

    render() {
        const { author, text } = this.state;
        return (
            <div>
                <input placeholder="author" name="author" onChange={this.handleInputChange} type="text" value={author}/><br/>
                <input placeholder="text" name="text" onKeyDown={this.handleEnterDown} onChange={this.handleInputChange} type="text" value={text}/><br/>
                <button onClick={this.handleMessageSend}>Send</button>
            </div>
        )
    }
}