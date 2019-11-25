import React from 'react';
import { MessagesList } from 'components/MessagesList';

export class MessageField extends React.Component {
    
    state ={
        messages:[
            {author:'bot',text:'Привет я бот Валера'},
            {author:'bot',text:'Я отвечу на любой твой вопрос.'},
            {author:'bot',text:'Задавай?'},
        ],
        newMessage: '',
        author:''
    }
    onChangeName = (event) =>{
        this.setState({author: event.target.value})
    }
    answerForBot = () =>{
        this.setState({
            messages:[...this.state.messages, 
                        {author:'bot', 
                         text:this.state.author +' мая-твая нипонимать!'}
                    ],
        })
    }
    onSentMessage = (event) =>{
        this.setState({
            messages:[...this.state.messages, 
                        {author:this.state.author, 
                         text:this.state.newMessage}
                    ],
            newMessage:''
        })
        setTimeout(this.answerForBot, 1000);
       

    }
    onChangeTextarea = (event) => {
        this.setState({newMessage:event.target.value})
    }
    render() {
        return (
            <div>
                <div><input onChange={this.onChangeName} placeholder='Your name...' type="text" name='author'/></div><br/>
                <textarea onChange={this.onChangeTextarea} placeholder="New message..." value={this.state.newMessage}></textarea>
                <div><button onClick={this.onSentMessage}>sent</button></div>
                <MessagesList messages={this.state.messages}/>
            </div>
           
        )
    }
}