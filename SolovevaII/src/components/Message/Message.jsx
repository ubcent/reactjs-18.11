import './Message.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export const messageType = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export class Message extends Component{

    static propTypes = messageType;

    get direction() {
        return this.props.author === 'Bot' ? 'start' : 'end';
    }

    render() {
        const {author, text} = this.props;

        //1 аргумент - класс по умолчанию
        const  classes = ClassNames('message', {
            'message-owner': author !== 'Bot',
            'message-companion': author === 'Bot'
        });

        return (
            <div className={classes} style={{alignSelf: `flex-${this.direction}`}}>
                <div>{text}</div>
                <div className="message-sender">{author}</div>
            </div>
        )
    }

}