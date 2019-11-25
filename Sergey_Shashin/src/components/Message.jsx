import React, { Component } from 'react';
import PropsTypes from 'prop-types';

export class Message extends Component {
  static propsType = {
    text: PropsTypes.string.isRequired,
  };

  render() {
    return <div>{this.props.text}</div>
  }
}