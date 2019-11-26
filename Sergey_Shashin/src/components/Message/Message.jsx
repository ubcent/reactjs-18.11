import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Message extends Component{
  static = {
    text: PropTypes.string.isRequired
  }

  render(){
    return (
    <h2>Сообщение</h2>
    )
  }
}