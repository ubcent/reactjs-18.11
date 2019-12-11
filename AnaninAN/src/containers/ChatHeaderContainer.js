import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { ChatHeader } from 'components/ChatHeader';
import { add } from 'actions/chats';

class ChatHeaderContainer extends PureComponent {
  handleChatAdd = () => {
    const { addChat, newChatId, redirect } = this.props;
    const chatName = prompt('Введите имя чата');

    addChat({ name: chatName, chatId: newChatId });
    redirect(newChatId);
  }

  render() {
    const { name } = this.props;
    return (
      <ChatHeader name={name} addChat={this.handleChatAdd } />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const lastId = chats.size ? chats.last().get('id') : 0;
  const newChatId = +lastId + 1;

  const { match } = ownProps;

  return {
    name: chats.getIn([match.params.id, 'name']),
    newChatId,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addChat: (chat) => dispatch(add(chat)),
    redirect: (id) => dispatch(push(`/chats/${id}`)),
  }
}

export const ChatHeaderRedux = connect(mapStateToProps, mapDispatchToProps)(ChatHeaderContainer);