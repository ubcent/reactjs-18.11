import './Messenger.scss';

import React, { Component, PureComponent } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends PureComponent {
    // componentDidUpdate() {
    //     if (this.messages.length) {
    //         const { author } = this.messages[this.messages.length - 1];
    //         if (author !== 'Bot') {
    //             setTimeout(() => {
    //                 this.handleMessageSend({ text: `Привет, ${author}! Бот на связи!`, author: 'Bot' });
    //             }, 1000);
    //         }
    //     }
    // }

    handleMessageSend = (message) => {
        const { chats } = this.state;
        const { match } = this.props;
        
        const chat = chats[match.params.id];
        const messages = this.messages.concat([message]);
        chat.messages = messages;

        this.setState({ 
            chats: {
                ...this.state.chats,
                [match.params.id]: chat,
            }
        });
    }

    render() {
        const { chats, messages } = this.props;

        return (
            <div className="messenger">
                {messages ? <MessagesList items={messages} /> : 'Пожалуйста, выберите чат, чтобы продолжить общение'}
                {messages && <MessageForm onSend={this.handleMessageSend} />}
            </div>
        );
    }
}