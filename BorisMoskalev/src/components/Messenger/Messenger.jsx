import './Messenger.css';

import React, {Component} from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

// const messages = ['Привет!', 'Как дела?', 'Как настроение?', 'Как погода?'];

export class Messenger extends Component {
    state = {
        messages: [
            {text: 'Привет всем!', author: 'Bot'}
        ],
    };

    interval = null;

    // componentDidMount() {
    //     this.interval = setInterval(() => {
    //         const randIndex = Math.floor(Math.random() * messages.length);
    //
    //         this.setState({
    //             messages: this.state.messages.concat([{text: messages[randIndex], author: 'Dmitry'}]),
    //         });
    //     }, 5000);
    // }

    componentDidUpdate() {
        let author = this.state.messages[this.state.messages.length - 1].author;
        if (author !== 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{
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
        let newMessages = this.state.messages.concat(message);
        this.setState({
            messages: newMessages,
        });
    }

    render() {
        const {messages} = this.state;

        return (
            <div className="messenger">
                <MessagesList items={messages} />
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        )
    }
}