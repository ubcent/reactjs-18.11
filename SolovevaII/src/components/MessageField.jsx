import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MessageField extends Component{

    static propTypes = {
        list: PropTypes.array,
    }


    render() {
        const message = this.props.list;

        return (
            <ul>
                {message.map((message, idx) => <li key={idx}>{message.autor}: {message.text}</li>)}
            </ul>
        )
    }

}