import React, { PureComponent } from 'react';
import { connect }              from 'react-redux';

import { App }        from 'components/App';
import { load, send } from 'actions/chats';

class AppContainer extends PureComponent {
  componentDidMount() {
    const { loadChats } = this.props;

    loadChats();
  }

  render() {
    const { chats, messages, sendMessage, id } = this.props;
    return <App chats={chats}
                messages={messages}
                sendMessage={sendMessage}
                id={id}/>;
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');

  const { match } = ownProps;

  let messages = null;

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
  }

  return {
    chats: chats.map((entry) => ({
      name: entry.get('name'),
      link: `/chat/${entry.get('id')}/`,
      read: entry.get('read'),
    })).toList().toJS(),
    messages,
    id: match ? match.params.id : null,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message)),
  }
}

export const AppRedux = connect(mapStateToProps, mapDispatchToProps)(AppContainer);