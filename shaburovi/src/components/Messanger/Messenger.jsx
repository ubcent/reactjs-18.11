import React, {Component} from 'react';
import {MessengeForm} from "./MessengeForm";
import {MessengesList} from "./MessengesList";
import {Box, Container} from "@material-ui/core";
import './messages.styl';



export class Messenger extends Component {

    state = {
        message: {}
    };

    handleMessageSend = (message) => {
        this.setState({
            message: message
        });
    };

    render() {
        const {message} = this.state;
        return (
            <Container>
                <Box display="flex" className={'messenger'}>
                     <MessengeForm onSend={this.handleMessageSend}/>
                     <MessengesList message={message}/>
                </Box>
            </Container>
        );
    }
}
