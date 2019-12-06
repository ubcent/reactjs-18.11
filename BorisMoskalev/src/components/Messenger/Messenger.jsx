import './Messenger.css';

import React, {Component} from 'react';

import {MessagesList} from 'components/MessagesList';
import {MessageForm} from 'components/MessageForm';
import { ChatList } from 'components/ChatList'
// const messages = ['Привет!', 'Как дела?', 'Как настроение?', 'Как погода?'];

export class Messenger extends Component {
    state = {
        chats: {
            '1': {messages: []},
            '2': {messages: []},
            '3': {messages: []}
        },
    };

    interval = null;

    componentDidUpdate() {
        let {chat} = this.props;
        const {author} = this.state.chats[chat].messages[this.state.chats[chat].messages.length - 1];
        if (author !== 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: this.state.chats[chat].messages.concat([{
                        text: 'Привет ' + author + '! Бот на связи! Повторите я вас не расслышал!',
                        author: 'Bot'
                    }]),
                });
            }, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleMessageSend = (message) => {
        let {chat} = this.props;
        let {chats} = this.state;

        chats[chat].messages = chats[chat].messages.concat([message]);
        this.setState(({chats}) => ({chats: chats}));
    };

    render() {
        const {messages} = this.state;

        return (
            <div className="container">
                <div className="chatlist">
                    <ChatList/>
                </div>
                <div className="messenger">
                    {this.props.chat ? <MessagesList items={this.messages}/> : 'Чат еще не выбран'}
                    {this.props.chat && <MessageForm onSend={this.handleMessageSend}/>}
                </div>
            </div>

        )
    }
}