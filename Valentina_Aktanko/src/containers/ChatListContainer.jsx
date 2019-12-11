import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ChatList } from 'components/ChatList';

class ChatListContainer extends PureComponent {
    render() {
        const { chats } = this.props;

        return (
            <ChatList chats={chats}/>
        );
    }
}

function mapStateToProps(state, props) {
    const chats = state.chats.get('entries').map((chat) => ({
        name: chat.get('name'), 
        id: chat.get('id'), 
        avatar: chat.get('avatarSrc'),
    })).toList().toJS();
    
    return {chats}
}

export const ChatListRedux = connect(mapStateToProps)(ChatListContainer);