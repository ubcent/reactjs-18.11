import './messagesList.css';

import React from 'react';


export class MessagesList extends React.Component {
    render() {
        return (
            <div className='messagesList__wrapper'>
               <ul>
                   
                   {this.props.messages.map((message) =>{
                       return <li className={message.author === 'bot' ? 'messagesList__li' : 'messagesList__li messagesList__li_right'}>
                                <p className="messagesList__p">{message.author}:
                                    <span className="messagesList__span">{message.text}</span>
                                </p>
                              </li>
                   })}
               </ul>
            </div>
           
        )
    }
}