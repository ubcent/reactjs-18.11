import React, {Component} from 'react';
import {Messege} from "./Messege";

export class MessengesList extends Component {

    state = {
        messages: [
            {
                text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                author: 'User',
                created_at: Date()
            },
            {
                text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                author: 'User',
                created_at: Date()
            },
            {
                text: "Lorem ipsum dolor sit amet.",
                author: 'User',
                created_at: Date()
            }
        ],
        message: {}
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        let message = this.props.message;
        if (this.state.message === message) {
            return false;
        }
        this.setState({
            messages: prevState.messages.concat([this.props.message]),
            message: message
        });
        setTimeout(() => {
            this.handleBotAnswer(message.author);
        }, 250);
    };

    handleBotAnswer = (author) => {
        this.setState({
            messages: this.state.messages.concat([{
                text: `Привет ${author}`,
                author: 'Bot',
                created_at: Date()
            }])
        });
    };


    render() {
        return (
            <div className={'message__list'}>
                {this.state.messages.map((message, idx) =>
                    <Messege key={idx} message={message}/>
                )}
            </div>
        );
    }
}
