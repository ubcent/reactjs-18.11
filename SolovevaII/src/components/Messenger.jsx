import React, {Component} from 'react';

import {MessageField} from './MessageField';
import {MessageForm} from './MessageForm';

export class Messenger extends Component{
    state = {
        messages: [
            {text: 'Hi!', autor: 'Ira'}
        ],
    }

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat(message)
        });
    }

    componentDidUpdate() {

        if (this.state.messages[this.state.messages.length - 1].autor !== 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{text: 'Бот на связи!', autor: 'Bot'}])
                });
            }, 1000);
        }
    }

    render() {
        const {messages} = this.state;

        return (
            <div>
                <MessageField list={messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        )
    }

}