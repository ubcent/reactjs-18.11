import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Header } from 'components/Header';

class HeaderContainer extends PureComponent {
    render () {
        const { chats } = this.props;
        const { currentChat } = this.props;

        return (
            <Header chats={chats} currentChat={currentChat}/>
        );
    }
}

function mapStateToProps(state, props) {
    const chats = state.chats.get('entries').map((chat) => ({name: chat.get('name')})).toList().toJS();
    const currentChat = props.match.params.id;
    return {chats, currentChat}
}

export const HeaderRedux = connect(mapStateToProps)(HeaderContainer);