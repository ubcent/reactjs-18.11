import React, { Component } from 'react';

import { MessagesList } from './MessagesList';
import { MessageForm } from './MessageForm';

const messages = ['Привет', 'Как дела?', 'Как настроение?', 'Как погода?'];

export class Messenger extends Component {
    state = {
        messages: [
            {text: 'Привет всем!', author: 'Valentina'}
        ],
    }
    
    interval = null;

    componentDidMount() {
        this.interval = setInterval(() => {
            const randIndex  = Math.floor(Math.random() * messages.length);

            this.setState({
                messages: this.state.messages.concat([{text: messages[randIndex], author: 'Valentina'}]),
            });
        }, 5000);
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].author !== 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{text: 'Привет! Бот на связи.', author: 'Bot'}]),
                });
            }, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { messages } = this.state;

        return (
            <div>
                <ul>
        {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}
                </ul>
            </div>
        );
    }
}