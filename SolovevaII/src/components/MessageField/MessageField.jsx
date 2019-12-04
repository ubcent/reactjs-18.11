import './MessageField.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import  {Message, messageType} from "components/Message";

export class MessageField extends Component{

    static propTypes = {
        list: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        ),
    };


    render() {
        const {list} = this.props;
        console.log(list);

        return (
            <div className="message-field">
                //Деструктуризация. Оператор «spread».
                {list.map((item, idx) => <Message key={idx} {...item} />)}
            </div>
        );
    }

}