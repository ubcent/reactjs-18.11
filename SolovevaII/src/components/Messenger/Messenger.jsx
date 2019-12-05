import './Messenger.css';

import React, {Component} from 'react';

import {MessageField} from 'components/MessageField';
import {MessageForm} from 'components/MessageForm';

export class Messenger extends Component{
    state = {
        messages: [],
    }

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat(message)
        });
    }

    componentDidUpdate() {
        const {author} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{text: `Привет, ${author}! Бот на связи!`, author: 'Bot'}])
                });
            }, 1000);
        }
    }

    componentWillUnmount() {

    }

    render() {
        const {messages} = this.state;

        return (
            <div className="messengerContainer">
                <MessageField list={messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        )
    }

}