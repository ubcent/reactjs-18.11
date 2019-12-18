import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {Layout} from "components/Layout";
import {sendMessage, listen, createChat, removeChat} from 'actions/chats';

class MessengerContainer extends PureComponent {
  componentDidMount() {
    const {listen} = this.props;
    listen();
  };

  handleMessageSend = (message) => {
   const {sendMessage, chatId} = this.props;

   sendMessage({
     ...message,
     chatId
   });
  };

  handleChatAdd = () => {
    const {createChat, redirect} = this.props;
    const chatName = prompt('Введите название чата');

    createChat({name: chatName});
  };

  render() {
    const {chats, messages, removeChat} = this.props;

    return (
      <Layout
        chats={chats}
        messages={messages}
        sendMessage={this.handleMessageSend}
        addChat={this.handleChatAdd}
        removeChat={removeChat}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const {match} = ownProps;

  let messages = null;

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
  }

  return {
    chats:
      chats
        .sortBy((entry) => -entry.get('timestamp'))
        .map((entry)=>({name: entry.get('name'), link: `/chat/${entry.get('_id')}`, _id: entry.get('_id'), timestamp: entry.get('timestamp')}))
        .toList()
        .toJS(),
    messages,
    chatId: match ? match.params.id : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage,
    createChat,
    listen: () => dispatch(listen()),
    removeChat: (chatId) => dispatch(removeChat(chatId)),
  };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);