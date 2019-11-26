import './Message.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

  get direction() {
    return this.props.author === 'Bot' ? 'start' : 'end';
  }

  render() {
    return (
      <div className='message' style={ {alignSelf: `flex-${this.direction}`} }>
        <div>{ this.props.message }</div>
        <div className='sender'>{ this.props.author }</div>
      </div>
    );
  }
}