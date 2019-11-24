import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>{ this.props.author }: { this.props.message }</div>
    );
  }
}