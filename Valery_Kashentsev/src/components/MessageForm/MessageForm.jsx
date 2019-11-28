import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
// import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';



export class MessageForm extends Component {
  state = {
    author: '',
    text: '',
  };



  static propTypes = {
    onSend: PropTypes.func,
  };

  handleMessageSend = () => {
    const { onSend } = this.props;

    if (typeof onSend === 'function') {
      onSend(this.state);

      this.setState({ text: '' });
    }
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    });
  }

  handleEnterDown = (event) => {
    if(event.ctrlKey && event.keyCode === 13) {
      this.handleMessageSend();
    }
  }

  render() {
    const { author, text } = this.state;

    // const useStyles = makeStyles(theme => ({
    //   button: {
    //     margin: theme.spacing(1),
    //   },
    // }));
    //
    // const classes = useStyles();

    return (
      <div>
        <TextField label="Author" name="author" onChange={this.handleInputChange} value={author} />
        <TextField label="Text" name="text" onKeyDown={this.handleEnterDown} onChange={this.handleInputChange} value={text} />
        <Fab variant="round" color="primary" onClick={this.handleMessageSend}><SendIcon /></Fab>
        {/*<Button*/}
        {/*  variant="contained"*/}
        {/*  color="primary"*/}
        {/*  className={classes.button}*/}
        {/*  onClick={this.handleMessageSend}*/}
        {/*  endIcon={<Icon>send</Icon>}*/}
        {/*>*/}
        {/*  Send*/}
        {/*</Button>*/}
      </div>
    );
  }
}