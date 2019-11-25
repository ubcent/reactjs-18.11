import React from 'react';

export class MessagesList extends React.Component {
    render() {
        return (
            <div>
               <ul>
                   
                   {this.props.messages.map((message) =>{
                       return <li><h3>{message.author}</h3>{message.text}</li>
                   })}
               </ul>
            </div>
           
        )
    }
}