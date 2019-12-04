import React, {Component} from 'react';
import PropType from 'prop-types';
import {Box, Button, Card, FormControl, TextField} from '@material-ui/core';


export class MessengeForm extends Component {
    state = {
        author: '',
        text: '',
        created_at: Date()
    };

    static propTypes = {
        onSend: PropType.func,
    };

    handleMessageSend = () => {
        const {onSend} = this.props;

        if (typeof onSend !== 'function') {
            return false;
        }

        onSend(this.state);

        this.setState({
            text: '',
            author: '',
        });
    };

    handleInputChange = ({target}) => {
        let fieldName = target.name;

        this.setState({
            [fieldName]: target.value
        });
    };

    render() {

        const {author, text} = this.state;

        return (

            <FormControl className={'message__form'}> <Card className={'message__form-card'}>
                <div className={'message__form-field'}>
                    <TextField
                        placeholder="author"
                        name="author"
                        onChange={this.handleInputChange}
                        type="text"
                        className="mb-2"
                        id="outlined-basic"
                        variant="outlined"
                        margin={'dense'}
                        value={author}/>

                </div>
                <div className={'message__form-field'}>
                    <TextField
                        placeholder="text"
                        name="text"
                        multiline
                        onChange={this.handleInputChange}
                        id="outlined-basic"
                        variant="outlined"
                        rows={5}
                        margin={'dense'}
                        value={text}/>
                </div>
                <Box display="flex" justifyContent="flex-end"> <Button onClick={this.handleMessageSend}
                                                                       id="outlined-basic"
                                                                       variant="outlined"
                >send</Button> </Box> </Card> </FormControl>
        );
    }
}