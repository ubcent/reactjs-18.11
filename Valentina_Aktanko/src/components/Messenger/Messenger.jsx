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

    get messages() {
        const { match, chats } = this.props;

        let messages = null;

        if (match && chats[match.params.id]) {
            messages = chats[match.params.id].messages;
        }
        
        return messages;
    }

    render() {
        return (
            <div className="messenger">
                {this.messages ? <MessagesList items={this.messages} /> : 'Пожалуйста, выберите чат, чтобы продолжить общение'}
                {this.messages && <MessageForm onSend={this.handleMessageSend} />}
            </div>
        );
    }
}