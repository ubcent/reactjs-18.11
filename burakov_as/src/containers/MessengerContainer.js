import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Messenger } from 'components/Messenger';
import { load, send, add } from 'actions/chats';

class MessengerContainer extends PureComponent {
  componentDidMount() {
    const { loadChats } = this.props;

    loadChats();
  }

  handleMessageSend = (message) => {
    const { sendMessage, chatId } = this.props;

    sendMessage({
      ...message,
      chatId
    });
  }

  handleChatAdd = () => {
     const { addChat, newChatId, redirect } = this.props;
     const chatName = prompt('Введите имя чата :');
     
     addChat({name: chatName, chatId: newChatId});
     redirect(chatId);
  }

  render() {
    const { chats, messages } = this.props;
    return (
      <Messenger addChat={this.handleChatAdd} sendMessage={this.handleMessageSend} messages={messages} chats={chats}/>
    )
  }
} 

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const lastId = state.chats.get('entries').size ? state.chats.get('entries').last().get('id') : 0;
  const newChatId = + lastId + 1;

  let messages = null; 

  const currentId = state.router.location.pathname.replace(/\D/ig, '');

  if (currentId && chats.has(currentId)) {     
      messages = chats.getIn([currentId, 'messages']).toJS();
  }

  return {
    chats: chats.map((entry) => ({ name: entry.get('name'), link: `/chats/${entry.get('id')}`})).toList().toJS(),
    messages,
    chatId: currentId,
    newChatId,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message)),
    addChat: (chat) => dispatch(add(chat)), 
    redirect: (id) =>dispatch(push(`/chats/${id}`)), 
  }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);