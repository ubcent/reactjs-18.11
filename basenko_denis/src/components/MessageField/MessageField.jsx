import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './messagesField.css'

import React from 'react';

import { MessagesList } from 'components/MessagesList/MessagesList';

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
    keyDownEnter = (event) => {
        if(event.ctrlKey && event.keyCode === 13){
            this.onSentMessage(event)
        }
    }
    onChangeName = (event) =>{
        this.setState({author: event.target.value})
    }
    answerForBot = () =>{
        this.setState({
            messages:[...this.state.messages, 
                        {author:'bot', 
                         text:this.state.author +', мая-твая нипонимать!'}
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
            <div className="messageField-wrapper">
                <div className='textArea__wrapper_name'>
                    <TextField  required id="standard-required" 
                                onChange={this.onChangeName} 
                                placeholder='Your name...' 
                                type="text" name='author'/>
                </div>
                <TextField id="standard-basic" 
                            onChange={this.onChangeTextarea} 
                            onKeyDown={this.keyDownEnter} 
                            placeholder="New message..." 
                            value={this.state.newMessage}>
                </TextField>
                <div className='textArea__wrapper_button'>
                    <Button onClick={this.onSentMessage} 
                            variant="contained">sent
                    </Button>
                </div>
                <MessagesList messages={this.state.messages}/>
            </div>
           
        )
    }
}