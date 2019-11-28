import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component{
    state = {
        autor: '',
        text: ''
    }

    static propTypes = {
        onSend: PropTypes.func,
    }

    handleMessageSend = () => {
        const {onSend} = this.props;

        if (typeof onSend === "function") {
            onSend(this.state);

            this.setState({text:''});
        }
    }

    handleInputChange = (event) => {
        const fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value,
        });
    }

    render() {
        const {autor, text} = this.state;
        return (
            <div>
                <input name="autor" onChange={this.handleInputChange} type="text" value={autor}/><br/>
                <textarea name="text" onChange={this.handleInputChange} value={text}></textarea><br/>
                <button onClick={this.handleMessageSend}>Send</button>
            </div>
        );
    }
}


