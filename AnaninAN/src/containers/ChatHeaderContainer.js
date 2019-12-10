import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ChatHeader } from 'components/ChatHeader';

class ChatHeaderContainer extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <ChatHeader name={name} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const { match } = ownProps;

  return {
    name: chats.getIn([match.params.id, 'name'])
  }
}

export const ChatHeaderRedux = connect(mapStateToProps)(ChatHeaderContainer);